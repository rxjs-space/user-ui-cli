import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { MenuItem } from '../../models';
import { SvgHolderService } from '../../services';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() items: MenuItem[];
  @Input() secData: Data;
  constructor(private svgHolderService: SvgHolderService) { }

  ngOnInit() {
  }

}
