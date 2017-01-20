import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared';
import { ApiService } from '../../shared/api';

@Component({
  selector: 'app-library-home',
  templateUrl: './library-home.component.html',
  styleUrls: ['./library-home.component.scss']
})
export class LibraryHomeComponent implements OnInit {
  items: MenuItem[] = [
    {
      title: this.api.apis.articles.secTitle,
      description: '技巧、实践、剖析、案例',
      icon: require('../_images/articles.svg'),
      url: `./${this.api.apis.articles.secId}`
    },
    {
      title: this.api.apis.columns.secTitle,
      description: '由一线技术专家撰写的专栏',
      icon: require('../_images/professional.svg'),
      url: `./${this.api.apis.columns.secId}`
    },
    {
      title: this.api.apis.news.secTitle,
      description: '来自国内外的重要新闻',
      icon: require('../_images/news.svg'),
      url: `./${this.api.apis.news.secId}`
    },
    {
      title: this.api.apis.resources.secTitle,
      description: '第三方资源的推荐与评测',
      icon: require('../_images/radar.svg'),
      url: `./${this.api.apis.resources.secId}`
    },
    {
      title: '友情链接',
      description: '与我们并肩作战的友军站点',
      icon: require('../_images/external.svg'),
      url: './partners'
    },
    {
      title: this.api.apis.authors.secTitle,
      description: '分享与成长',
      icon: require('../_images/writing.svg'),
      url: `./${this.api.apis.authors.secId}`
    }

  ];
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
