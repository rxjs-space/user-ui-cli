import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { RoutingData } from '../../models';
import { ApiService } from '../../api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsRx: Observable<any[]>;
  data: RoutingData;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService) { }

  /**
   * after component init, get the route.data first,
   * then switchMap to route.params and query the api
   */
  ngOnInit() {
    this.itemsRx = this.activatedRoute.data
      .switchMap((data: RoutingData) => {
          this.data = data;
          return this.activatedRoute.params;
      })
      .switchMap(params => this.api[this.data.id].query(params));
  }
}
