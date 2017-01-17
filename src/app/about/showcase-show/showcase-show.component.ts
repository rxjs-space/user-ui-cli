import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';
import {BasePageComponent, ShowcaseApi, Showcase, matchById} from '../../shared';

@Component({
  selector: 'app-showcase-show',
  templateUrl: './showcase-show.component.html',
  styleUrls: ['./showcase-show.component.scss']
})
export class ShowcaseShowComponent extends BasePageComponent implements OnInit {
  item: Observable<Showcase>;
  constructor(activatedRoute: ActivatedRoute, private api: ShowcaseApi) {
    super(activatedRoute);
  }

  ngOnInit() {
    this.reloadInit();
  }

  reload(params: {id: string}): void {
    this.item = this.api.query()
      .find(matchById(params.id))
      .do((item: Showcase) => {
        document.title = `${item.title} - Angular中文社区`;
      });
  }

}
