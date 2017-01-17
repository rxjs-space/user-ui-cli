import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models';
import { SvgHolderService } from '../../services';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() items: MenuItem[];
  constructor(private svgHolderService: SvgHolderService) { }

  ngOnInit() {
  }

}
