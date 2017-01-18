import { Injectable } from '@angular/core';
import { items as articlesItems, queryFac as articlesQueryFac } from './articles';

@Injectable()
export class ApiService {
  articles = {
    // items: articlesItems,
    query: articlesQueryFac(articlesItems)
  }
  constructor() { }

}
