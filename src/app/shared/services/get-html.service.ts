import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

/**
 * It's inconvenient to install webpack loaders in a angular-cli powered project.
 * So it's difficult to render markdowns in-house, especially with pictures in markdowns.
 * We can put markdowns in another repo, and have github render them for us.
 * 
 * users will upload markdown and affiliated pictures as normal.
 * 
 * users will have to add a 'folder' entry in the index.ts to indicate in which folder markdown is located, 
 * in addtion to id, title, content ...
 * 
 * with the 'folder' info, this service will go fetch the html rendered by github,
 * and it will replace img:src and a:href with the right path.
 * unnecessary svg generated by github will be sanitized by angular.
 * 
 * with the 'folder', we can get following url
 * `https://api.github.com/repos/angular-bbs/user-ui/contents/src/app/_shared/api/articles/${folder}/_index.md?ref=master`
 * the http request header to include 'Accept:application/vnd.github.v3.html+json';
 * there we will have a rendered html returned
 * and the `<img src="./abc.png">` will be replaced as 
 * `<img src="https://raw.githubusercontent.com/angular-bbs/user-ui/master/src/app/_shared/api/articles/${folder}/abc.png">`
 * 
 */
type folder = string;
type html = string;

@Injectable()
export class GetHtmlService {
  /**
   * this map will cache the htmls
   */
  htmlCacheMap: Map<folder, html> = new Map();
  constructor(private http: Http) { }
  /**
   * fetch the html rendered by github and process img:src and a:href
   */
  fetchAndReplace(folder: string): Observable<html> {
    const cached = this.htmlCacheMap.get(folder);
    if (cached) {
      return Observable.of(cached);
    } else {
      const headers = new Headers({'Accept': 'application/vnd.github.v3.html+json'});
      const options = new RequestOptions({ headers });
      const apiUrl = `https://api.github.com/repos/angular-bbs/user-ui/contents/src/app/_shared/api/articles/${folder}/_index.md?ref=master`;

      return this.http.get(apiUrl, options)
        .map(res => res.text())
        .map(html => {
          const pathPrefix = `https://raw.githubusercontent.com/angular-bbs/user-ui/master/src/app/_shared/api/articles/${folder}/`;
          const processedHtml = html
            .replace(/src=\"\.(.+?)\"/g, `src=\"${pathPrefix}\$1\"`)
            .replace(/href=\"\.(.+?)\"/g, `href=\"${pathPrefix}\$1\"`);
          this.htmlCacheMap.set(folder, processedHtml);
          return processedHtml;
        })
        .startWith(''); // in detail page, spinner will show on empty string
    }

  }

}