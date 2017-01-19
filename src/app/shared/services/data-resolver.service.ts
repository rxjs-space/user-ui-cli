import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ShowComponent } from '../component';
import { FetchGithubService } from './fetch-github.service';
import { ApiService } from '../api/api.service';

@Injectable()
export class DataResolverService implements Resolve<any> {

  constructor(
    private fg: FetchGithubService,
    private api: ApiService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log(route.url[0].path);
    console.log(state);
    const currentUrl = route.url[0].path;
    const parentUrl = route.parent.url[0].path;
    const isApiSec = this.api.apisArr.indexOf(currentUrl) > -1;
    console.log(isApiSec);
    if (isApiSec) {
      return this.fg.fetchJson(currentUrl);
    } else {
      return Observable.of([]);
    }

  }
}



