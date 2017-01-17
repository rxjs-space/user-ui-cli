import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

interface RoutingData {
  title: string;
  api: any;
  reload: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    protected activatedRoute: ActivatedRoute) { }

  /**
   * after component init, get the route.data first,
   * then switchMap to route.params and query the api
   */
  ngOnInit() {
    this.activatedRoute.data
      .switchMap(
        () => this.activatedRoute.params,
        (data: RoutingData, params) => ({data, params})
      )
      .switchMap(combo => combo.data.api.query(combo.params))
      .subscribe(console.log);
  }
}
