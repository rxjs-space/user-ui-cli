import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { AuthorsApi } from './authors.api';
// import { ColumnsApi } from './columns.api';
import { Article, Author, Column, Partner } from '../models';

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
  news: Section;
  resources: Section;
  partners: Section;
}

const articleNotFound: Article = {
    id: '404',
    title: '404',
    content: null,
    tags: ['404'],
    authors: ['404']
};

const authorNotFound: Author =   {
  id: '404',
  name: '404',
  bio: 'always exploring',
  description: 'born with the web',
  avatar: './_images/Tim刘.png',
  columnist: false,
  homepage: '/'
};

const partnerNotFound: Partner =   {
  id: '404',
  name: '404',
  description: 'born with the web',
  avatar: './_images/Tim刘.png',
  homepage: '/'
};

const columnsNotFound: Column =   {
  id: '404',
  name: `404`,
  bio: 'exploring as always',
  description: 'born with the web',
  authors: [''],
  tags: [''],
  avatar: ''
};

const apiConst = {
  articles: {
    secId: 'articles',
    secTitle: '精品文章',
    itemTitle: '文章内容',
    notFound: articleNotFound
  },
  authors: {
    secId: 'authors',
    secTitle: '特约作者',
    itemTitle: '作者详情',
    notFound: authorNotFound
  },
  columns: {
    secId: 'columns',
    secTitle: '技术专栏',
    itemTitle: '专栏内容',
    notFound: columnsNotFound
  },
  news: {
    secId: 'news',
    secTitle: '前沿观察',
    itemTitle: '新闻详情',
    notFound: articleNotFound
  },
  resources: {
    secId: 'resources',
    secTitle: '资源雷达',
    itemTitle: '资源详情',
    notFound: articleNotFound
  },
  partners: {
    secId: 'partners',
    secTitle: '友情链接',
    itemTitle: '伙伴介绍',
    notFound: partnerNotFound
  }

};
@Injectable()
export class ApiService {
  static apiConst = apiConst;

  apis: Apis = {
    articles: {
      secId: ApiService.apiConst.articles.secId,
      secTitle: ApiService.apiConst.articles.secTitle,
      itemTitle: ApiService.apiConst.articles.itemTitle,
      query: this.articlesQuery,
      notFound: ApiService.apiConst.articles.notFound,
    },
    authors: {
      secId: ApiService.apiConst.authors.secId,
      secTitle: ApiService.apiConst.authors.secTitle,
      itemTitle: ApiService.apiConst.authors.itemTitle,
      query: this.idQuery,
      notFound: ApiService.apiConst.authors.notFound
    },
    columns: {
      secId: ApiService.apiConst.columns.secId,
      secTitle: ApiService.apiConst.columns.secTitle,
      itemTitle: ApiService.apiConst.columns.itemTitle,
      query: this.columnsQuery,
      notFound: ApiService.apiConst.columns.notFound
    },
    news: {
      secId: ApiService.apiConst.news.secId,
      secTitle: ApiService.apiConst.news.secTitle,
      itemTitle: ApiService.apiConst.news.itemTitle,
      query: this.idQuery,
      notFound: ApiService.apiConst.news.notFound
    },
    resources: {
      secId: ApiService.apiConst.resources.secId,
      secTitle: ApiService.apiConst.resources.secTitle,
      itemTitle: ApiService.apiConst.resources.itemTitle,
      query: this.idQuery,
      notFound: ApiService.apiConst.resources.notFound
    },
    partners: {
      secId: ApiService.apiConst.partners.secId,
      secTitle: ApiService.apiConst.partners.secTitle,
      itemTitle: ApiService.apiConst.partners.itemTitle,
      query: this.idQuery,
      notFound: ApiService.apiConst.partners.notFound
    }
  };



  constructor(
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


  columnsQuery(itemsX: Column[], params: {id?: string, author?: string}): Observable<Column[]> {
    const filteredItems = itemsX
      .filter(item => !params.id || (item.id === params.id))
      .filter(item => !params.author || (item.authors.indexOf(params.author) !== -1));
    return Observable.of(filteredItems);
  };

}


