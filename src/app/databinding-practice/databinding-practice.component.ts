import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-practice',
  templateUrl: './databinding-practice.component.html',
  styleUrls: ['./databinding-practice.component.css']
})
export class DatabindingPracticeComponent implements OnInit {
  light = "燈"
  number = 123

  innerHTMLbinding="<sup style='color:red'> fighfig </sup>"

  targetPerson: any = {
    pdfName:"aaa"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
