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
type myComboPDP = {
  parentUrl: UrlSegment[];
  data: myData;
  params: myParams;
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


  ngOnInit() {

    /**
     * this itemRx will emit an item with html, the html will replace a property of item
     * see this.replaceWithHtml for detail about which property to replace
     * 
     * the process will query the fake api first, and if any item found, it will go fetch the html
     */
    this.itemRx = Observable.combineLatest(
        // each time the route.parent.url or route.data or route.params changes
        // restart the process of fetching the item
        this.route.parent.url, this.route.data, this.route.params,
        (parentUrl, data, params) => (<myComboPDP>{parentUrl, data, params})
      )
      .switchMap(comboPDP => {
        const { parentUrl, data, params } = comboPDP;
        const secId = params.secId;
        this.titles = {
          secTitle: data.apiConst[secId].secTitle,
          itemTitle: data.apiConst[secId].itemTitle,
        };
        // get the items from the fake api
        return this.api.apis[secId].query(data.items, params);
      }, (comboPDP, items) => (<{secId: string, items: any[]}>{secId: comboPDP.params.secId, items}))
      .map(comboSI => {
        // we need the 1st item of the items
        const { secId, items } = comboSI;
        let item;
        if (items.length === 0) {
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

    // following code do the samething as above, but with several switchMaps

    // this.itemRx = this.route.parent.url
    //   .switchMap(parentUrl => {
    //     return this.route.data;
    //   })
    //   .switchMap((data: myData) => {
    //     return this.route.params;
    //   }, (data, params) => ({data, params}))
    //   .switchMap(comboDP => {
    //     const { data, params } = comboDP;
    //     const secId = params.secId;
    //     this.titles = {
    //       secTitle: data.apiConst[secId].secTitle,
    //       itemTitle: data.apiConst[secId].itemTitle,
    //     };
    //     return this.api.apis[secId].query(data.items, params);
    //   }, (comboDP, items: any[]) => ({data: comboDP.data, params: comboDP.params, items}))
    //   .map(comboDPI => {
    //     const { data, params, items } = comboDPI;
    //     const secId = params.secId;
    //     let item;
    //     if (!items.length) {
    //       item = Object.assign({}, this.api.apis[secId].notFound);
    //     } else {
    //       item = Object.assign({}, items[0]);
    //     }
    //     item.secId = secId;
    //     return item;
    //   })
    //   .do(this.setDocumentTitle)
    //   .switchMap(this.fetchHtml.bind(this), (item, html) => ({item, html}))
    //   .map(this.replaceWithHtml);

  }

  fetchHtml(item) {
    switch (true) {
      case item.secId === 'columns':
      case item.secId === 'partners':
        // no need to fetch html for 'columns'
        return Observable.of('');
      case item.id === '404':
        // if no item found, html for be ...
        return Observable.of('<p>找到个404</p>');
      default:
        return this.fgs.fetchAndReplace(item.secId, item);
    }
  }

  /**
   * after fetching html, replace item[property] with the html, where necessary
   */
  replaceWithHtml(combo: any) {
    const secId = combo.item.secId;
    switch (secId) {
      case 'articles':
      case 'news':
      case 'resources':
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
      case 'news':
      case 'resources':
        document.title = `${item.title} - Angular中文社区`; break;
      case 'authors':
        document.title = `${item.name} - 作者 - Angular中文社区`; break;
      default:
        document.title = `Angular中文社区`; break;
    }
  }

}

