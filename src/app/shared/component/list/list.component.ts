import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models';
import { ApiService } from '../../api';

const apiConst = ApiService.apiConst;

const authorsOrColumns = [
  apiConst.authors.secId,
  apiConst.columns.secId
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: any[];
  @Input() secId: string;
  menuItems: MenuItem[];
  useMenuListComponent: boolean;
  constructor() { }

  /**
   * will map items to menuItems when necessary
   */
  ngOnInit() {

    switch (this.secId) {
      case 'authors':
      case 'columns':
        this.useMenuListComponent = true;
        this.menuItems = this.items.map(item => ({
          icon: item.avatar,
          description: item.bio,
          title: item.name,
          url: `./${item.id}`
        }));
        break;
      case 'news':
        this.useMenuListComponent = true;
        this.menuItems = this.items.map(item => ({
          title: item.title,
          icon: item.image,
          description: item.summary,
          url: `/library/news/${item.id}`
        }));
        break;
    }

  }

}


