import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { RoutingData } from '../../models';
import { ApiService } from '../../api';
import { GetHtmlService } from '../../services';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  data: RoutingData;
  itemRx: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private getHtml: GetHtmlService) { }

  ngOnInit() {
    this.itemRx = this.activatedRoute.data
      .switchMap((data: RoutingData) => {
        this.data = data;
        return this.activatedRoute.params;
      })
      .switchMap(params => this.api[this.data.id].query(params)) // the 'params' contains id, then filter by id
      .map(items => items[0]) // map the array of 1 item to item
      .do((item: {title: string}) => {
        // console.log(item);
        document.title = `${item.title} - Angular中文社区`;
      })
      .switchMap(item => {
        return this.getHtml.fetchAndReplace(item.folder); // go get the html rendered by github
      }, (item, html) => ({item, html}))
      .map(combo => {
        // console.log(combo);
        combo.item.content = combo.html;
        return combo.item;
      })

  }

}

