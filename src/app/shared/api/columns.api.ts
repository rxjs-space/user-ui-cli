import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Column } from '../models';
import { FetchGithubService } from '../services';

const items: Column[] = [
  {
    id: '雪狼湖',
    name: '雪狼湖',
    bio: '感受一位十八年技术老兵的热忱',
    description: '茶前漫坐，听雪狼谈古论今，分析技术表里，享受不一样的思维盛宴',
    authors: ['雪狼'],
    tags: ['从前', '现在', '将来', '奇闻', '轶事', '放松', '烧脑'],
    avatar: './_images/snowwolf.jpg'
  },
  {
    id: 'trotyl',
    name: `Trotyl's Workspace`,
    bio: '',
    description: '',
    authors: ['trotyl'],
    tags: [''],
    avatar: './_images/trotyl.jpg'
  }
];

const notFound: Column =   {
  id: '404',
  name: `404`,
  bio: 'exploring as always',
  description: 'born with the web',
  authors: [''],
  tags: [''],
  avatar: ''
};


@Injectable()
export class ColumnsApi {
  secId = 'columns';
  /**
   * item.avatar: user input relative path to api folder at github, 
   * we will convert the relative path to the rawUrl at github
   */
  private items = items.map(item => Object.assign({}, item, {
    avatar: this.ghs.rawUrl(this.secId, item.avatar)
  }));
  public notFound = notFound;
  public query = this.queryFac(this.items);
  constructor(private ghs: FetchGithubService) {}

  private queryFac(itemsX: any[]) {
    return function(params: {id?: string}): Observable<any[]> {
      const filteredItems = itemsX
        .filter(item =>
          !params.id || ((item.id === params.id) || (item.name === params.id))
        );
      return Observable.of(filteredItems);
    };
  }

}

