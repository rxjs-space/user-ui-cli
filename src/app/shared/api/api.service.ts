import { Injectable } from '@angular/core';
import { 
  items as articlesItems,
  queryFac as articlesQueryFac,
  notFound as articleNotFound
} from './articles';
import { items as authorsItems, queryFac as authorsQueryFac } from './authors';

@Injectable()
export class ApiService {
  articles = {
    query: articlesQueryFac(articlesItems),
    notFound: articleNotFound,
    /*items: articlesItems*/
  };
  authors = { query: authorsQueryFac(authorsItems), /*items: authorsItems*/ };
  constructor() { }

}
