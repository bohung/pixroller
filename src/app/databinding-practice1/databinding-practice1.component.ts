import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-practice1',
  templateUrl: './databinding-practice1.component.html',
  styleUrls: ['./databinding-practice1.component.css']
})

export class DatabindingPractice1Component implements OnInit {
  light = "電燈"

  innerHTMLbinding = "<sup style='color:red'> fighfig </sup>";

  targetPerson:any = {
    pdfName:"aaa"
  }

  fruits = [
    'apple',
    'banana'
  ]
  
  apple = "red"
  appleObj ={
    'color':this.apple === 'green' ? 'green' : 'red'
  }
  appleObj2 ={
    'appleGreen' : this.apple === 'green',
    'appleRed' : this.apple === 'red'
  }

  //陣列就放包含了所有房間
  //網頁則是要展示一次只展現一個房間
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

  //1.路徑存成變數
  //2.html標籤的屬性加入中括號，才能順利將資料導入網頁
  imgVar = '../../assets/LOG_2013_TNLA_1_000.png';

  open = false

  constructor() { }

  ngOnInit(): void {
  }

}
