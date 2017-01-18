import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

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
   * after component init, get the routingData first,
   * then switchMap to route.params and query the api
   * after getting the items, transform the items if necessary
   */
  ngOnInit() {
    this.itemsRx = this.activatedRoute.data
      .switchMap((data: RoutingData) => {
          this.data = data;
          return this.activatedRoute.params;
      })
      .switchMap(params => this.api[this.data.secId].query(params))
      .map((items: any[]) => {
        let processedItems;
        switch (this.data.secId) {
          case 'authors':
            processedItems = items.map(item => Object.assign(
              {}, item, {
                avatar: 'https://raw.githubusercontent.com/angular-bbs/user-ui/master/src/app/_shared/api/authors/' + item.avatar
              }
            ));
            break;
          default:
            processedItems = items;
        }
        return processedItems;
      });
  }
}
