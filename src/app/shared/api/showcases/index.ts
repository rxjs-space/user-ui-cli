import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Showcase } from '../../models/showcase';

import * as MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

const items: Showcase[] = [
  {
    id: 'iFish',
    title: 'iFISH',
    url: 'http://www.ifishonline.org/',
    author: 'ThoughtWorks',
    customer: '智渔科技',
    description: md.render(require('raw-loader!' + './10.ifish简介/_index.md')),
    picture: require('./10.ifish简介/_images/ifish.svg'),
  },
  {
    id: 'Angular BBS简介',
    title: 'Angular BBS简介',
    url: 'https://wx.angular.cn',
    author: '雪狼',
    customer: '开源项目',
    description: md.render(require('raw-loader!' + './20.Angular BBS简介/_index.md')),
    picture: require('./20.Angular BBS简介/logo.svg'),
  },
];

@Injectable()
export class ShowcaseApi {
  query(params = {}): Observable<Showcase> {
    return Observable.from(items);
  }
}
