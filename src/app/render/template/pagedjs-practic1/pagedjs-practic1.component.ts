// import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pagedjs-practic1',
  templateUrl: './pagedjs-practic1.component.html',
  styleUrls: ['./pagedjs-practic1.component.css']
})
export class PagedjsPractic1Component implements OnInit {

  // constructor() { }
  constructor(private sanitizer: DomSanitizer) { 
    if(!document.getElementById('paged-polyfill')){
      this.loadPagedJsPolyfill(); // 和rendering有關勿動
    }
    
  }

  ngOnInit(): void {
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



}
