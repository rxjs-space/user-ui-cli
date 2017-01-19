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
  data: Data;
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
    // it may not be good practice to get secId by getValue()
    this.secId = (<BehaviorSubject<UrlSegment[]>>(this.route.parent.url)).getValue()[0].path;


    this.itemsRx = this.route.data
      .switchMap((data: {items?: any[]}) => {
        console.log(data);
        if (data.items.length) {
          this.api[this.secId].items = data.items;
        }
        this.data = data;
        return this.route.params;
      })
      .switchMap(params => this.api[this.secId].query(params))
      .map((items: any[]) => {
        let processedItems;
        switch (this.secId) {
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
