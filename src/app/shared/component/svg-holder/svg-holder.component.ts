import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SvgHolderService } from '../../services';

@Component({
  selector: 'app-svg-holder',
  templateUrl: './svg-holder.component.html',
  styleUrls: ['./svg-holder.component.scss']
})
export class SvgHolderComponent implements OnInit {
  @ViewChild('chevronRight') chevronRight;
  @ViewChild('add') add;
  constructor(private holderService: SvgHolderService) { }

  ngOnInit() {
    this.holderService.holder.next({
      chevronRight: this.chevronRight,
      add: this.add
    });
  }

}
