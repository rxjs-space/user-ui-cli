import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { ApiService } from '../../api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsRx: Observable<any[]>;
  data: {items?: any[]};
  secId: string;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService) { }

  /**
   * after component init, get the routing data first,
   * then switchMap to route.params and query the api
   * after getting the items, transform the items if necessary
   */
  ngOnInit() {
    this.itemsRx = this.route.data
      .switchMap((data: {items?: any[]}) => {
        // console.log(data);
        this.data = data;
        return this.route.params;
      })
      .switchMap(params => {
        this.secId = (<any>params).secId;
        return this.api.apis[this.secId].query(this.data.items, params);
      })

  }
}
