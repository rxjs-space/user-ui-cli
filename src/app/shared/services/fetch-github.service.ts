import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Article, Author } from '../models';
import { API_CONFIG, ApiConfig } from '../config';
import { ApiService } from '../api';

/**
 * It's inconvenient to install webpack loaders in a angular-cli powered project.
 * So it's difficult to render markdowns in-house, especially with pictures in markdowns.
 * We can put markdowns in another repo, and have github render them for us.
 * 
 * users will upload markdown and affiliated pictures as normal.
 * 
 * 
 * this service will go fetch the html rendered by github,
 * and it will replace img:src and a:href with the right path.
 * unnecessary svg generated by github will be sanitized by angular.
 * 
 * for example, in order to get article, we fetch content from (item.content is the markdown file path):
 * `https://api.github.com/repos/angular-bbs/user-ui/contents/src/app/_shared/api/articles/${item.content}/_index.md?ref=master`
 * the http request header to include 'Accept:application/vnd.github.v3.html+json';
 * there we will have a rendered html returned
 * and the `<img src="./abc.png">` will be replaced as 
 * `<img src="https://raw.githubusercontent.com/angular-bbs/user-ui/master/src/app/_shared/api/articles/${item.content}/abc.png">`
 * 
 */
type mapKey = string;
type html = string;

@Injectable()
export class FetchGithubService {


  /**
   * this map will cache the htmls
   */
  private cache: Map<mapKey, html> = new Map();

  constructor(
    private http: Http,
    @Inject(API_CONFIG) private apiConfig: ApiConfig,
    private api: ApiService) { }


  /**
   * try find data in cache, if none, execute far (short for 'fetchAndReplace')
   */
  fetchAndReplace(secId: string, item: any): Observable<html> {
    /**
     * the mapKey here is the markdown filePath
     */
    let mapKey;
    switch (secId) {
      case this.api.apis.articles.secId: mapKey = item.content; break;
      case this.api.apis.authors.secId: mapKey = item.description; break;
    }
    const cached = this.cache.get(mapKey);
    if (cached) {
      return Observable.of(cached);
    } else {
      return this.executeFar(secId, mapKey);
    }
  }

  /**
   * do the actual work
   * fetch the html rendered by github and process img:src and a:href
   */
  executeFar(secId: string, mapKey: string) {
    const headers = new Headers({'Accept': 'application/vnd.github.v3.html+json'});
    const options = new RequestOptions({ headers });

    let apiUrl, pathPrefix;
    switch (secId) {
      case this.api.apis.articles.secId:
        apiUrl = this.apiUrl(secId, mapKey);
        pathPrefix = this.rawUrl2(secId, `${mapKey}/`).replace(/_index.md/, ''); // article.content has '_index.md' at the end
        break;
      case this.api.apis.authors.secId:
        apiUrl = this.apiUrl(secId, mapKey);
        pathPrefix = this.rawUrl2(secId, '/_images/');
        break;
    }


    return this.http.get(apiUrl, options)
      .map(res => res.text())
      .map(html => {
        const processedHtml = html
          .replace(/src=\"\.(.+?)\"/g, `src=\"${pathPrefix}\$1\"`)
          .replace(/href=\"\.(.+?)\"/g, `href=\"${pathPrefix}\$1\"`);
        this.cache.set(mapKey, processedHtml);
        return processedHtml;
      })
      .startWith(''); // in detail page, spinner will show on empty string
  }

   /**
   * this is the url to get the html rendered from markdonw by github
   * example: https://api.github.com/repos/rxjs-space/user-ui-api/contents/articles/${mapKey}?ref=master`;
   */
  apiUrl(secId: string, filePath: string) {
    const userNameAndRepoName = `${this.apiConfig.githubUsername}/${this.apiConfig.apiRepoName}`;
    return `https://api.github.com/repos/${userNameAndRepoName}/contents/${this.apiConfig.pathToApi}/${secId}/${filePath}?ref=master`;
  }

  /**
   * example: https://raw.githubusercontent.com/rxjs-space/user-ui-api/master/articles/index.json
   * for above rawUrl, username = 'rxjs-space', apiRepoName = 'user-ui-api', pathToApi = '', secId = 'articles', filePath = 'index.json'
   */
  rawUrl2(secId: string, filePath: string) {
    const userNameAndRepoName = `${this.apiConfig.githubUsername}/${this.apiConfig.apiRepoName}`;
    return `https://raw.githubusercontent.com/${userNameAndRepoName}/master/${this.apiConfig.pathToApi}/${secId}/${filePath}`;
  }

  /**
   * fetch json from github and replace relative path with rawUrl where necessary
   */
  fetchJson(secId: string) {
    const rawUrl = this.rawUrl2(secId, 'index.json');
    const itemsCached = this.cache.get(secId);
    if (itemsCached) {
      return Observable.of(itemsCached);
    } else {
      return this.http.get(rawUrl)
        .map(res => { // for author.avatar or column.avatar, replace relative path with rawUrl
          if (secId === 'authors' || secId === 'columns') {
            return res.json().map(item => Object.assign({}, item, {
                avatar: this.rawUrl2(secId, item.avatar)
            }));
          } else {
            return res.json();
          }
        })
        .do(items => this.cache.set(secId, items));
    }

  }

}
