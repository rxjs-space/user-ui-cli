import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ApiService } from '../../api';
import { FetchGithubService } from '../../services';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  data: {items?: any[]};
  itemRx: Observable<any>;
  secId: string;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private fgs: FetchGithubService,
    private router: Router) { }

  /**
   * get the html for the item from github, based on data.secId
   */
  ngOnInit() {
    this.itemRx = this.route.data
      .switchMap((data: {items?: any[]}) => {
        // console.log(data);
        this.data = data;
        return this.route.params;
      })
      .switchMap(params => {
        // the 'params' contains secId and id, then filter by id
        this.secId = (<any>params).secId;
        return this.api.apis[this.secId].query(this.data.items, params);
      })
      .map((items: any[]) => {
        if (!items.length) {
          items[0] = this.api.apis[this.secId].notFound;
        }
        return items[0];
      }) // map the array of 1 item to item
      .do((item: {title?: string, name?: string}) => {
        this.setDocumentTitle(this.secId, item);
      })
      .switchMap(this.fetchHtml.bind(this), (item, html) => ({
        item: Object.assign({}, item),
        html
      }))
      .map(this.replaceWithHtml.bind(this));

    }

    fetchHtml(item) {
      switch (true) {
        case this.secId === 'columns':
          return Observable.of(''); // this will be the html that will not be used
        case item.id === '404':
          return Observable.of('<p>找到个404</p>'); // this will be the html for 404
        default:
          return this.fgs.fetchAndReplace(this.secId, item);
      }
    }

    replaceWithHtml(combo: any) {
      switch (this.secId) {
        case 'articles':
          combo.item.content = combo.html; break;
        case 'authors':
          combo.item.description = combo.html;
          break;
      }
      return combo.item;
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

