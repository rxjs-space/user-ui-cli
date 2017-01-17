import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../shared';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss']
})
export class ShowcaseListComponent implements OnInit {
  @Input() items: MenuItem[];
  constructor() { }

  ngOnInit() {
  }

}
