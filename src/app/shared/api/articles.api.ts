import { Injectable } from '@angular/core';
import { Article } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


const items: Article[] = require('./json/articles.json');

const notFound: Article = {
    id: '404',
    title: '404',
    content: null,
    tags: ['404'],
    authors: ['404']
};

@Injectable()
export class ArticlesApi {
  secId = 'articles';
  private items: Article[] = items;
  public notFound = notFound;
  public query = this.queryFac(this.items);
  constructor() {
  }

  /**
   * the fake query will filter the array, if nothing found, there will be an empty array
   * Not using Observable.prototype.filter, because
   * if filter Observable and nothing found, there will be Observable.never, which is not useful to consume
   */
  private queryFac(itemsX: Article[]) {
    return function(params: {id?: string, author?: string, tag?: string, column?: string}): Observable<Article[]> {
      const filteredItems = itemsX
        .filter(item => !item.hidden)
        .filter(item => !params.id || (item.id === params.id))
        .filter(item => !params.author || (item.authors.indexOf(params.author) !== -1))
        .filter(item => !params.tag || (item.tags.indexOf(params.tag) !== -1))
        .filter(item => !params.column || (item.column === params.column));
      return Observable.of(filteredItems);
    };
  }

}
