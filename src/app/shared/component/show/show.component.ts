import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ApiService } from '../../api';
import { FetchGithubService } from '../../services';

type myParams = { secId?: string };
type myData = { items: any[], apiConst: any };
type pUPD = { 
  parentUrl: UrlSegment;
  params: myParams;
  data: myData;
};

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  titles: any;
  // data: myData;
  itemRx: Observable<any>;
  // secId: string;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private fgs: FetchGithubService,
    private router: Router) { }

  /**
   * get the html for the item from github, based on data.secId
   */
  ngOnInit() {

    this.itemRx = this.route.parent.url
      .switchMap(parentUrl => {
        return this.route.data;
      })
      .switchMap((data: myData) => {
        return this.route.params;
      }, (data, params) => ({data, params}))
      .switchMap(comboDP => {
        const { data, params } = comboDP;
        const secId = params.secId;
        this.titles = {
          secTitle: data.apiConst[secId].secTitle,
          itemTitle: data.apiConst[secId].itemTitle,
        };
        return this.api.apis[secId].query(data.items, params);
      }, (comboDP, items: any[]) => ({data: comboDP.data, params: comboDP.params, items}))
      .map(comboDPI => {
        const { data, params, items } = comboDPI;
        const secId = params.secId;
        let item;
        if (!items.length) {
          item = Object.assign({}, this.api.apis[secId].notFound);
        } else {
          item = Object.assign({}, items[0]);
        }
        item.secId = secId;
        return item;
      })
      .do(this.setDocumentTitle)
      .switchMap(this.fetchHtml.bind(this), (item, html) => ({item, html}))
      .map(this.replaceWithHtml);

  }

  fetchHtml(item) {
    switch (true) {
      case item.secId === 'columns':
        return Observable.of(''); // this will be the html that will not be used
      case item.id === '404':
        return Observable.of('<p>找到个404</p>'); // this will be the html for 404
      default:
        return this.fgs.fetchAndReplace(item.secId, item);
    }
  }

  replaceWithHtml(combo: any) {
    const secId = combo.item.secId;
    switch (secId) {
      case 'articles':
        combo.item.content = combo.html; break;
      case 'authors':
        combo.item.description = combo.html;
        break;
    }
    return combo.item;
  }

  setDocumentTitle(item: {title?: string, name?: string, secId: string}) {
    switch (item.secId) {
      case 'articles':
        document.title = `${item.title} - Angular中文社区`; break;
      case 'authors':
        document.title = `${item.name} - 作者 - Angular中文社区`; break;
    }
  }

}

