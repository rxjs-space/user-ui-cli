import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { RoutingData } from '../../models';
import { ApiService } from '../../api';
import { GetHtmlService } from '../../services';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  data: RoutingData;
  itemRx: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private getHtml: GetHtmlService) { }

  /**
   * get the html for the item from github, based on data.secId
   */
  ngOnInit() {
    this.itemRx = this.activatedRoute.data
      .switchMap((data: RoutingData) => {
        this.data = data;
        return this.activatedRoute.params;
      })
      .switchMap(params => this.api[this.data.secId].query(params)) // the 'params' contains id, then filter by id
      .map(items => items[0]) // map the array of 1 item to item
      .do((item: {title?: string, name?: string}) => {
        this.setDocumentTitle(this.data.secId, item);
      })
      .switchMap(item => {
        // console.log(item);
        // go get the html rendered by github
        return this.getHtml.fetchAndReplace(this.data.secId, item);
      }, (item, html) => ({
        item: Object.assign({}, item),
        html
      }))
      .map(combo => {
        // console.log(combo);
        switch (this.data.secId) {
          case 'articles':
            combo.item.content = combo.html; break;
          case 'authors':
            combo.item.description = combo.html;
            combo.item.avatar = 'https://raw.githubusercontent.com/angular-bbs/user-ui/master/src/app/_shared/api/authors/_images/' + combo.item.avatar
            break;
        }
        return combo.item;
      })

  }

  setDocumentTitle(secId, item: {title?: string, name?: string}) {
    switch (secId) {
      case 'articles':
        document.title = `${item.title} - Angular中文社区`; break;
      case 'authors':
        document.title = `${item.name} - 作者 - Angular中文社区`; break;
    }
  }

}

