import { Component } from '@angular/core';
import * as MarkdownIt from 'markdown-it';
let md = new MarkdownIt();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  mdContent = md.render(require('raw-loader!./app.md'));
}
