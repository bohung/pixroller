import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-example',
  templateUrl: './databinding-example.component.html',
  styleUrls: ['./databinding-example.component.css']
})
export class DatabindingExampleComponent implements OnInit {
  music = "媽媽有隻牛"
  lala = "<sup style='color:red'> Xman </sup>"
  //sup是html標籤中的[上標]屬性，style是css。

  name:any = {
    jay:"周杰倫"
  }

  logoVar = '../../assets/5.PNG';
  //logoVar是變數名稱，等號後面是變數值

  hellos = ['嗨','哈','yo']
  //陣列就像是房間一樣，使用在表格上，例如這個房間就有三個人住(?)

  fruits = [
    {
      "fruitname": 'banana',
      "color": '黃色',
      "look": '長條型',
    },{
      "fruitname": 'apple',
      "color": '紅色',
      "look": '圓形',
    }
  ]
//陣列+物件的databinding，看起來會像表格一樣

  
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
