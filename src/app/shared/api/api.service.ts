import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthorsApi } from './authors.api';
import { ColumnsApi } from './columns.api';
import { Article } from '../models';


@Injectable()
export class ApiService {
  apis = {
    articles: {
      secId: 'articles',
      secTitle: '精品文章',
      itemTitle: '文章内容',
      query: this.articlesQuery,
      notFound: this.articleNotFound
    },
    authors: {
      secId: 'authors',
      secTitle: '特约作者',
      itemTitle: '作者详情'
    },
    columns: {
      secId: 'columns',
      secTitle: '技术专栏',
      itemTitle: '专栏内容'
    }
  };

  articleNotFound: Article = {
      id: '404',
      title: '404',
      content: null,
      tags: ['404'],
      authors: ['404']
  };

  constructor(
    public authors: AuthorsApi,
    public columns: ColumnsApi
  ) {}

  get apisArr(): string[] {
    return Object.keys(this.apis).map(k => this.apis[k].secId);
  }


  articlesQuery(itemsX: Article[], params: {id?: string, author?: string, tag?: string, column?: string}): Observable<Article[]> {
    const filteredItems = itemsX
      .filter(item => !item.hidden)
      .filter(item => !params.id || (item.id === params.id))
      .filter(item => !params.author || (item.authors.indexOf(params.author) !== -1))
      .filter(item => !params.tag || (item.tags.indexOf(params.tag) !== -1))
      .filter(item => !params.column || (item.column === params.column));
    return Observable.of(filteredItems);
  };


}


