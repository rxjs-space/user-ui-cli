import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApi, BasePageComponent, Book, MenuItem } from '../../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.scss']
})
export class BookHomeComponent extends BasePageComponent implements OnInit {
  items: Observable<MenuItem[]>;
  constructor(activatedRoute: ActivatedRoute, private api: BookApi) {
    super(activatedRoute);
  }

  ngOnInit() {
    this.reloadInit();
  }

  reload(params): void {
    this.items = this.api.query()
      .map(this.bookToMenuItem)
      .toArray();
  }

  bookToMenuItem(book: Book): MenuItem {
    return {
      title: book.title,
      icon: book.picture,
      description: `作者：${book.authors.join(' ')}`,
      url: `/about/book/${book.id}`
    };
  }


}
