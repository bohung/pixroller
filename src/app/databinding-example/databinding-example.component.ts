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

  imgMH = '../../assets/myohan.jpg';

  drugs = [
    {
      "F_Service_Dte": '12/05/2021',
      "F_Rx_Nbr": "000007527071",
      "F_Drug_Nme": 'LOSARTAN POTASSIUM',
      "F_Net_Check_Diff_Amt": '-6.43',
      "F_Explanation_Codes_Txt": "AC[]A prior claim reversal caused your original claim to be reversed and repriced",
    }, {
      "F_Service_Dte": "12/05/2021",
      "F_Rx_Nbr": "000007542128",
      "F_Drug_Nme": "METOPROLOL SUCCINATE",
      "F_Net_Check_Diff_Amt": "-2.59",
      "F_Explanation_Codes_Txt": "AC[]A prior claim reversal caused your original claim to be reversed and repriced",
    }
  ]

  apple = "000";

  rose = "blue";

  roseObj = {
    'color':this.rose === 'blue' ? 'blue' : 'white'
  }
  
  go = "black";

  goObj = {
    '.goBlack':this.go === 'black',
    '.goWhite':this.go === 'white'
  } 

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
