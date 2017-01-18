import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Author } from '../../models/author';

export const items: Author[] = [
  {
    id: '雪狼',
    name: '雪狼',
    bio: '好为人师，好为人师',
    description: '10.雪狼.md', // the markdown file name
    avatar: '雪狼.jpg',
    columnist: true,
    homepage: 'https://github.com/asnowwolf/'
  },
];

/**
 * fake query for author[s]
 * `library/author/{author.id}` will lead to the author page with the id
 * if there is no user with that id, will also filter author.name
 * if no id params passed, will return full list of authors
 */
export function queryFac(itemsX: Author[]) {
  return function(params: {id?: string}): Observable<Author[]> {
    const filteredItems = itemsX
      .filter(item => !params.id || (item.id === params.id) || (item.name = params.id));
    return Observable.of(filteredItems);
  };
}
