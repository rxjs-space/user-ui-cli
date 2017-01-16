import { Component } from '@angular/core';
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
  /**
   * holds the html generated from app.md markdown file
   */
  htmlFromMarkdown = md.render(require('raw-loader!./app.md'));
}

