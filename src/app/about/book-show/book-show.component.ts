import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';

import { BasePageComponent, BookApi, Book, matchById } from '../../shared';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.scss']
})
export class BookShowComponent extends BasePageComponent implements OnInit {
  item: Observable<Book>;
  constructor(activatedRoute: ActivatedRoute, private api: BookApi) {
    super(activatedRoute);
  }

  ngOnInit() {
    this.reloadInit();
  }

  reload(params: {id: string}): void {
    this.item = this.api.query()
      .find(matchById(params.id))
      .do((item: Book) => {
        document.title = `${item.title} - Angular中文社区`;
      });
  }

}
