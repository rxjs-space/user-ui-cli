import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { AuthorsApi } from './authors.api';
// import { ColumnsApi } from './columns.api';
import { Article, Author, Column } from '../models';

export const apiConst = {
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


interface Section {
  secId: string;
  secTitle: string;
  itemTitle: string;
  query: Function;
  notFound: Object;
}

interface Apis {
  articles: Section;
  authors: Section;
  columns: Section;
}

@Injectable()
export class ApiService {
  apis: Apis = {
    articles: {
      secId: apiConst.articles.secId,
      secTitle: apiConst.articles.secTitle,
      itemTitle: apiConst.articles.itemTitle,
      query: this.articlesQuery,
      notFound: this.articleNotFound
    },
    authors: {
      secId: apiConst.authors.secId,
      secTitle: apiConst.authors.secTitle,
      itemTitle: apiConst.authors.itemTitle,
      query: this.idQuery,
      notFound: this.authorNotFound
    },
    columns: {
      secId: apiConst.columns.secId,
      secTitle: apiConst.columns.secTitle,
      itemTitle: apiConst.columns.itemTitle,
      query: this.idQuery,
      notFound: this.columnsNotFound
    }
  };

  articleNotFound: Article = {
      id: '404',
      title: '404',
      content: null,
      tags: ['404'],
      authors: ['404']
  };

  authorNotFound: Author =   {
    id: '404',
    name: '404',
    bio: 'always exploring',
    description: 'born with the web',
    avatar: './_images/Tim刘.png',
    columnist: false,
    homepage: '/'
  };

  columnsNotFound: Column =   {
    id: '404',
    name: `404`,
    bio: 'exploring as always',
    description: 'born with the web',
    authors: [''],
    tags: [''],
    avatar: ''
  };

  constructor(
    // public authors: AuthorsApi,
    // public columns: ColumnsApi
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

  idQuery(itemsX: any[], params: {id?: string}): Observable<any[]> {
    const filteredItems = itemsX
      .filter(item =>
        !params.id || ((item.id === params.id) || (item.name === params.id))
      );
    return Observable.of(filteredItems);
  };

}


