import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.scss']
})
export class HtmlViewerComponent implements OnChanges, OnInit {
  @Input() content: string;
  html: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes['content'];
    // if (change.currentValue) {
    //   this.html = this.sanitizer.bypassSecurityTrustHtml(change.currentValue);
    // }
    console.log(change);
    if (change.currentValue) {
      this.html = this.content;
    }
  }
  ngOnInit() {
  }

}
