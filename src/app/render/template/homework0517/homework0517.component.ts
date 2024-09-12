// import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homework0517',
  templateUrl: './homework0517.component.html',
  styleUrls: ['./homework0517.component.css']
})
export class Homework0517Component implements OnInit {

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

  LoremList = [ //物件寫法
    {
      "LNAME": 'JAXX',
      "LAGE": "12",
      "LID": '1384773',
      "LNOTE": '',

    }, {
        "LNAME": 'ROSY',
        "LAGE": "30",
        "LID": '1384773',
        "LNOTE": '',
  
      }, {
          "LNAME": 'MARTY',
          "LAGE": "10",
          "LID": '1384773',
          "LNOTE": '',
        }
]












}
