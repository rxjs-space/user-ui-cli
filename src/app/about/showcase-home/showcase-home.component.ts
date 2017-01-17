import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {ShowcaseApi, BasePageComponent, Showcase, MenuItem} from '../../shared';

@Component({
  selector: 'app-showcase-home',
  templateUrl: './showcase-home.component.html',
  styleUrls: ['./showcase-home.component.scss']
})
export class ShowcaseHomeComponent extends BasePageComponent implements OnInit {
  items: Observable<MenuItem[]>;
  constructor(activatedRoute: ActivatedRoute, private api: ShowcaseApi) {
    super(activatedRoute);
  }

  ngOnInit() {
    this.reloadInit();
  }

  reload(params): void {
    this.items = this.api.query()
      .map(this.showcaseToMenuItem)
      .toArray();
  }

  showcaseToMenuItem(showcase: Showcase): MenuItem {
    return {
      title: showcase.title,
      icon: showcase.picture,
      description: `${[showcase.customer, showcase.author].join('&')}`,
      url: `/about/showcase/${showcase.id}`
    }
  }

}
