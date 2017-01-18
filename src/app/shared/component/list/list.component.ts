import { Component, Input, OnInit } from '@angular/core';
import { RoutingData, MenuItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: any[];
  @Input() secData: RoutingData;
  menuItems: MenuItem[];
  constructor() { }

  /**
   * will map items to menuItems when necessary
   */
  ngOnInit() {
    if (this.secData.secId === 'authors' ) {
      this.menuItems = this.items.map(author => ({
        icon: author.avatar,
        description: author.bio,
        title: author.name,
        url: `./${author.id}`
      }));
    }
  }

}

