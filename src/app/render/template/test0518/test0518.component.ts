import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-test0518',
  templateUrl: './test0518.component.html',
  styleUrls: ['./test0518.component.css']
})
export class Test0518Component implements OnInit {

  constructor(private sanitizer: DomSanitizer) { 
    if(!document.getElementById('paged-polyfill')){
      this.loadPagedJsPolyfill(); // 和rendering有關勿動
    }
    
  }

     // 和rendering有關勿動
    loadPagedJsPolyfill() {
      const node = document.createElement('script');
      node.src = '/assets/paged.polyfill.js';
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      node.id = 'paged-polyfill';
      document.getElementsByTagName('head')[0].appendChild(node);
    }

  ngOnInit(): void {
  }

}
