import { Component } from '@angular/core';
// import { MarkdownService as mds } from './shared/services'
import * as MarkdownIt from 'markdown-it';
/**
 * use `md.render(markdown in rawtext)` to generate html
 * out of markdown, for example:
 * ```
 * const htmlFromMarkdown_text = md.render('# gogogo');
 * const htmlFromMarkdown_file = md.render(require('raw-loader!./app.md));
 * ```
 */
const md = new MarkdownIt();

/**
 * root component for the app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  /**
   * holds the html generated from app.md markdown file
   */
  htmlFromMarkdown = md.render(require('raw-loader!./app.md'));
  // htmlFromMarkdown = require('markdown-it-loader!raw-loader!./app.md');
}

