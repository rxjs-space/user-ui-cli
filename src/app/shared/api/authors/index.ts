import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Author } from '../../models/author';

export const items: Author[] = [
  {
    id: '雪狼',
    name: '雪狼',
    bio: '好为人师，好为人师',
    description: '10.雪狼.md', // the markdown file name
    avatar: './_images/雪狼.jpg',
    columnist: true,
    homepage: 'https://github.com/asnowwolf/'
  },
  {
    id: 'trotyl',
    name: '余泽江',
    bio: `You're not as good as you think you are`,
    description: '20.余泽江.md',
    avatar: './_images/余泽江.jpg',
    columnist: false,
    homepage: 'https://github.com/trotyl/'
  },
  {
    id: 'wike',
    name: '袁志',
    bio: `在前端领域探索，永不止步`,
    description: './20.袁志.md',
    avatar: './_images/袁志.jpg',
    columnist: false,
    homepage: 'https://github.com/wike933'
  },
  {
    id: 'indooorsman',
    name: '王传业',
    bio: `前端老司机`,
    description: './66.王传业.md',
    avatar: './_images/王传业.jpg',
    columnist: false,
    homepage: 'https://csser.me'
  },
  {
    id: 'lhtin',
    name: '丁乐华',
    bio: 'Why didn\'t the spider go to school? Because she learned everything on the web.',
    description: './250.丁乐华.md',
    avatar: './_images/250.丁乐华.jpg',
    columnist: false,
    homepage: 'https://github.com/lhtin'
  },
  {
    id: 'timliu',
    name: 'Tim刘',
    bio: '小白小白小白',
    description: './Tim刘.md',
    avatar: './_images/Tim刘.png',
    columnist: false,
    homepage: 'https://github.com/rxjs-space'
  },
  {
    id: '王開寧',
    name: '王開寧',
    bio: '终于找到真爱的前端码农',
    description: './260.王開寧.md',
    avatar: './_images/260.王開寧.jpg',
    columnist: false,
    homepage: 'https://twincle.github.io'
  },
    {
    id: 'dapao',
    name: '大炮',
    bio: '上天不要移開險峻，請賜予吾攀登之力',
    description: './67.大炮.md',
    avatar: './_images/Tim刘.png',
    columnist: false,
    homepage: 'https://github.com/btcioner/About-ME'
  },
  {
    id: '木丁糖',
    name: '木丁糖',
    bio: '爱好前端开发的Android白面猿',
    description: './270.木丁糖.md',
    avatar: './_images/木丁糖.jpg',
    columnist: false,
    homepage: 'http://www.jianshu.com/users/d614825bc8a1/latest_articles'
  },
  {
    id: '易sense',
    name: '易sense',
    bio: '一生中可以喜欢很多人，但心疼的只有一个',
    description: './280.易sense.md',
    avatar: './_images/易sense.jpg',
    columnist: false,
    homepage: 'http://www.jianshu.com/users/d0244c5326c5/latest_articles'
  },
  {
    id: 'VTHINKXIE',
    name: 'VTHINKXIE',
    bio: 'VTHINKXIE',
    description: './VTHINKXIE.md',
    avatar: './_images/VTHINKXIE.jpg',
    columnist: false,
    homepage: 'http://weibo.com/vthinkxie/'
  }
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
      .filter(item =>
        !params.id || ((item.id === params.id) || (item.name === params.id))
      );
    return Observable.of(filteredItems);
  };
}
