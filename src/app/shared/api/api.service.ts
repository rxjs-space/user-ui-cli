import { Injectable } from '@angular/core';
import { items as articlesItems, queryFac as articlesQueryFac } from './articles';
import { items as authorsItems, queryFac as authorsQueryFac } from './authors';

@Injectable()
export class ApiService {
  articles = { query: articlesQueryFac(articlesItems), /*items: articlesItems*/ };
  authors = { query: authorsQueryFac(authorsItems), /*items: authorsItems*/ };
  constructor() { }

}
