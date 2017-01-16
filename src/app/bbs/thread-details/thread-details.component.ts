import { Component, Input, OnInit } from '@angular/core';

import { Thread } from '../../shared';

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.scss']
})
export class ThreadDetailsComponent implements OnInit {
  @Input() item: Thread;
  constructor() { }

  ngOnInit() {
  }

}
