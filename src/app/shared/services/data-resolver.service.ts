import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ShowComponent } from '../component';

@Injectable()
export class DataResolverService implements Resolve<any>{

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // console.log(route);
    // console.log(state);
    const secId = route.parent.url[0].path;
    // console.log(route.component instanceof ShowComponent);
    return Observable.of('x');
    // return this.activatedRoute.data
    //   .switchMap((data: RoutingData) => {
    //     this.data = data;
    //     return this.activatedRoute.params;
    //   })
    //   .switchMap(params => this.api[this.data.secId].query(params)) // the 'params' contains id, then filter by id
    //   .map(items => items[0]) // map the array of 1 item to item
    //   .do((item: {title?: string, name?: string}) => {
    //     this.setDocumentTitle(this.data.secId, item);
    //   })
    //   .switchMap(item => {
    //     // console.log(item);
    //     // go get the html rendered by github
    //     return this.getHtml.fetchAndReplace(this.data.secId, item);
    //   }, (item, html) => ({
    //     item: Object.assign({}, item),
    //     html
    //   }))
    //   .map(combo => {
    //     // console.log(combo);
    //     switch (this.data.secId) {
    //       case 'articles':
    //         combo.item.content = combo.html; break;
    //       case 'authors':
    //         combo.item.description = combo.html;
    //         combo.item.avatar = 'https://raw.githubusercontent.com/angular-bbs/user-ui/master/src/app/_shared/api/authors/' + combo.item.avatar
    //         break;
    //     }
    //     return combo.item;
    //   })
  }
}



