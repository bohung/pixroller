import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-xxx0520',
  templateUrl: './xxx0520.component.html',
  styleUrls: ['./xxx0520.component.css']
})
export class XXX0520Component implements OnInit {

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

  lists = [
    {
      "name": 'JAXX',
      "age": '12',
      "id": '1384773',
      "note": '',
    },
    {
      "name": 'ROSY',
      "age": '30',
      "id": '1384773',
      "note": '',
    },
    {
      "name": 'MARTY',
      "age": '10',
      "id": '1384773',
      "note": '',
    }
  ]
     


}
