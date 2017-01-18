import { Component, Input, OnInit } from '@angular/core';
import { RoutingData } from '../../models';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() item: any;
  @Input() secData: RoutingData;
  constructor() { }

  ngOnInit() {
  }

}
