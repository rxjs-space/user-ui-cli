import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';

import { ThreadApi, Thread, BasePageComponent, matchById } from '../../shared';

@Component({
  selector: 'app-thread-show',
  templateUrl: './thread-show.component.html',
  styleUrls: ['./thread-show.component.scss']
})
export class ThreadShowComponent extends BasePageComponent implements OnInit  {
  item: Observable<Thread>;
  constructor(activatedRoute: ActivatedRoute, private api: ThreadApi) {
    super(activatedRoute);
  }

  ngOnInit() {
    this.reloadInit();
  }

  reload(params: { id: string }) {
    this.item = this.api.query('')
      .find(matchById(params.id))
      .do((item: Thread) => {
        document.title = `${item.title} - Angular中文社区`;
      });
  }

}
