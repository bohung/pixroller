import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-practice',
  templateUrl: './databinding-practice.component.html',
  styleUrls: ['./databinding-practice.component.css']
})
export class DatabindingPracticeComponent implements OnInit {
  light="燈"
  number=123

  innerHTMLbinding="<sup style='color:red'> fighfig </sup>"

  targetPerson:any={
    '2pdfName':"aaa"
  }

  rooms=['a','b','c']
  doors=['1','2','3']

  apple='green'
  appleObj={
    'color':this.apple === 'green' ? 'green' : 'red'
  }
  appleObj2={
    'applegreen' : this.apple === 'green',
    'applered' : this.apple === 'red'
  }

  open = true

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

  imgVar='../../assets/LOG_6627_EM2016_1_000.png'

  constructor() { }

  ngOnInit(): void {
  }

}
