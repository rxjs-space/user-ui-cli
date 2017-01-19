import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models';
import { apiConst } from '../../api';

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
  isAuthorsOrColumns: boolean;
  constructor() { }

  /**
   * will map items to menuItems when necessary
   */
  ngOnInit() {

    if ( authorsOrColumns.indexOf(this.secId) > -1 ) {
      this.isAuthorsOrColumns = true;
      this.menuItems = this.items.map(item => ({
        icon: item.avatar,
        description: item.bio,
        title: item.name,
        url: `./${item.id}`
      }));
    }
  }

}


