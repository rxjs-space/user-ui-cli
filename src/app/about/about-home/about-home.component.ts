import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {

  items: MenuItem[] = [
    {
      title: '中文社区',
      description: '历史、现状、成员、活动',
      icon: 'about.svg', // site images are put in 'src/assets/images' folder
      url: './us'
    }, {
      title: '中文官网',
      description: '中文版的教程、指南等',
      icon: 'angular-blue.svg',
      url: './site'
    }, {
      title: '图书推荐',
      description: '中英文技术书籍推荐',
      icon: 'books.svg',
      url: './book'
    }, {
      title: '成功案例',
      description: '国内外企业中的成功案例',
      icon: 'showcase.svg',
      url: './showcase'
    }, {
      title: '合作共赢',
      description: '来！一起推动的繁荣',
      icon: 'handshake.svg',
      url: './join'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
