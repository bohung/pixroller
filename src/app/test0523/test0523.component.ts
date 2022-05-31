import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-test0523',
  templateUrl: './test0523.component.html',
  styleUrls: ['./test0523.component.css']
})

export class Test0523Component implements OnInit {

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
  
    iconimg = '../assets/icon-thumbnail_3.png'
    logoimg = '../assets/Logo_TV_2015.png'
    catiimg = '../assets/Simple-clean-logo-for-Interior-Design-Company-1365041.png'
    pebbimg = '../assets/svl5ykb5fd5qiusazsse.png'

    Names = [
      {
        "F_Name": 'JAXX',
        "F_Age": "12",
        "F_ID": '1384773',
        "F_Note": '',
      }, {
        "F_Name": 'ROSY',
        "F_Age": "30",
        "F_ID": '1384773',
        "F_Note": '',
      }, {
        "F_Name": 'MARTY',
        "F_Age": "10",
        "F_ID": '1384773',
        "F_Note": '',
      }
    ]
}
