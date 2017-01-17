import { Component, OnInit } from '@angular/core';
import { ThreadApi, Thread, BasePageComponent, matchById, SvgHolderService } from '../../shared';

@Component({
  selector: 'app-thread-nav',
  templateUrl: './thread-nav.component.html',
  styleUrls: ['./thread-nav.component.scss']
})
export class ThreadNavComponent implements OnInit {
  constructor(private svgHolderService: SvgHolderService) { }

  ngOnInit() {
  }

}
