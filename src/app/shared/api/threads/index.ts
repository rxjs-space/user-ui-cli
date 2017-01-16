import { Injectable } from '@angular/core';
import { Thread } from '../../models/thread';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

import * as MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

const items: Thread[] = [
  {
    id: '1',
    title: '欢迎您！陌生的旅者',
    picture: require('./_images/wizard.svg'),
    content: md.render(require('raw-loader!' + './10.欢迎您！陌生的旅者.md')),
    authors: ['雪狼', '叶志敏'],
    labels: ['hot', 'latest'],
  },
  {
    id: '2',
    title: '悬赏！哥德巴赫猜想',
    content: md.render(require('raw-loader!' + './20.悬赏！哥德巴赫猜想.md')),
    authors: ['雪狼'],
    labels: ['latest', 'reward'],
  },
  {
    id: '3',
    title: 'Angular 2路由问题',
    content: md.render(require('raw-loader!' + './30.Angular 2路由问题.md')),
    authors: ['雪狼'],
    labels: [],
  },
];

@Injectable()
export class ThreadApi {
  query(filter = 'all'): Observable<Thread> {
    return Observable.from(items)
      .filter((item: Thread) => {
        switch (filter) {
          case 'mine':
            return item.authors.indexOf('雪狼') !== -1;
          case 'hot':
            return item.labels.indexOf('hot') !== -1;
          case 'latest':
            return item.labels.indexOf('latest') !== -1;
          case 'reward':
            return item.labels.indexOf('reward') !== -1;
          default:
            return true;
        }
      });
  };
}
