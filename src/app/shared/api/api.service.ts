import { Injectable } from '@angular/core';
import { ArticlesApi } from './articles.api';
import { AuthorsApi } from './authors.api';
import { ColumnsApi } from './columns.api';

@Injectable()
export class ApiService {
  apis = {
    articles: {
      secId: 'articles',
      secTitle: '精品文章',
      itemTitle: '文章内容'
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
  constructor(
    public authors: AuthorsApi,
    public articles: ArticlesApi,
    public columns: ColumnsApi
  ) {}

  get apisArr(): string[] {
    return Object.keys(this.apis).map(k => this.apis[k].secId);
  }
}


