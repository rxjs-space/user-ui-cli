import { Component, Input, OnInit } from '@angular/core';
import { Showcase } from '../../shared';
@Component({
  selector: 'app-showcase-details',
  templateUrl: './showcase-details.component.html',
  styleUrls: ['./showcase-details.component.scss']
})
export class ShowcaseDetailsComponent implements OnInit {
  @Input() item: Showcase;
  constructor() { }

  ngOnInit() {
  }

}
