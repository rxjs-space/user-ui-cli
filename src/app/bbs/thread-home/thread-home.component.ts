import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Thread, ThreadApi } from '../../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-thread-home',
  templateUrl: './thread-home.component.html',
  styleUrls: ['./thread-home.component.scss']
})
export class ThreadHomeComponent implements OnInit {
  items: Observable<Thread[]>;
  constructor(private activatedRoute: ActivatedRoute, private api: ThreadApi) { }

  ngOnInit() {
    const url = this.activatedRoute.snapshot.url[0];
    this.items = this.api.query(url.path)
      .toArray();
  }

}
