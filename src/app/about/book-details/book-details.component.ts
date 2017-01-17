import { Component, Input, OnInit } from '@angular/core';
import {Book} from '../../shared';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() item: Book;
  constructor() { }

  ngOnInit() {
  }

}
