import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared';
import { libraryConst } from '../library';

@Component({
  selector: 'app-library-home',
  templateUrl: './library-home.component.html',
  styleUrls: ['./library-home.component.scss']
})
export class LibraryHomeComponent implements OnInit {
  items: MenuItem[] = [
    {
      title: libraryConst.articles.secTitle,
      description: '技巧、实践、剖析、案例',
      icon: require('../_images/articles.svg'),
      url: `./${libraryConst.articles.secId}`
    },
    {
      title: libraryConst.columns.secTitle,
      description: '由一线技术专家撰写的专栏',
      icon: require('../_images/professional.svg'),
      url: `./${libraryConst.columns.secId}`
    },
    {
      title: '前沿观察',
      description: '来自国内外的重要新闻',
      icon: require('../_images/news.svg'),
      url: './news'
    },
    {
      title: '资源雷达',
      description: '第三方资源的推荐与评测',
      icon: require('../_images/radar.svg'),
      url: './resource'
    },
    {
      title: '友情链接',
      description: '与我们并肩作战的友军站点',
      icon: require('../_images/external.svg'),
      url: './partner'
    },
    {
      title: libraryConst.authors.secTitle,
      description: '分享与成长',
      icon: require('../_images/writing.svg'),
      url: `./${libraryConst.authors.secId}`
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
