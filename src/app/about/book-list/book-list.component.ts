import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../shared';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() items: MenuItem[];
  constructor() { }

  ngOnInit() {
  }

}
