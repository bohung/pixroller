import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-example',
  templateUrl: './databinding-example.component.html',
  styleUrls: ['./databinding-example.component.css']
})
export class DatabindingExampleComponent implements OnInit {
  light = "opening light"

  ngModelLight = '我是可以變動的'

  innerHTMLbinding = "<sup style='color:red'> fighfig </sup>";


  constructor() { }

  ngOnInit(): void {
  }

  demo1(){
    console.log(this.light)
  }

  demo2(){
    console.log(this.ngModelLight)
  }



}
