import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ApiService } from '../../api';
import { GetHtmlService } from '../../services';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  data: Data;
  itemRx: Observable<any>;
  secId: string;
  secTitle: string;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private getHtml: GetHtmlService,
    private router: Router) { }

  /**
   * get the html for the item from github, based on data.secId
   */
  ngOnInit() {
    // it may not be good practice to get secId and secTitle by getValue()
    this.secId = (<BehaviorSubject<UrlSegment[]>>(this.route.parent.url)).getValue()[0].path;
    this.secTitle = (<BehaviorSubject<any>>(this.route.parent.data)).getValue().title;
    this.itemRx = this.route.data
      .switchMap((data: Data) => {
        // console.log(data);
        this.data = data;
        return this.route.params;
      })
      .switchMap(params => this.api[this.secId].query(params)) // the 'params' contains id, then filter by id
      .map((items: any[]) => {
        if (!items.length) {
          items[0] = this.api[this.secId].notFound;
        }
        return items[0];
      }) // map the array of 1 item to item
      .do((item: {title?: string, name?: string}) => {
        this.setDocumentTitle(this.secId, item);
      })
      .switchMap(item => {
        // console.log(item);
        if (item.id === '404') {
          return Observable.of('<p>找到个404</p>');
        } else {
          // go get the html rendered by github
          return this.getHtml.fetchAndReplace(this.secId, item);
        }
      }, (item, html) => ({
        item: Object.assign({}, item),
        html
      }))
      .map(combo => {
        // console.log(combo);
        switch (this.secId) {
          case 'articles':
            combo.item.content = combo.html; break;
          case 'authors':
            combo.item.description = combo.html;
            combo.item.avatar = 'https://raw.githubusercontent.com/angular-bbs/user-ui/master/src/app/_shared/api/authors/' + combo.item.avatar
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

