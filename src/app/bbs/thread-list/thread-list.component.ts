import { Component, Input, OnInit } from '@angular/core';
import { Thread } from '../../shared';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {
  @Input() items: Thread[];
  constructor() { }

  ngOnInit() {
  }

}
