import { Injectable } from '@angular/core';
import { ArticlesApi } from './articles.api';
import { AuthorsApi } from './authors.api';
import { ColumnsApi } from './columns.api';

@Injectable()
export class ApiService {
  constructor(
    public authors: AuthorsApi,
    public articles: ArticlesApi,
    public columns: ColumnsApi
  ) {}

}
