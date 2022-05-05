import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import bwipjs from 'bwip-js';
import { TargetMap } from 'src/app/short/dev-data-source';
import { DoNotSplitLines } from 'src/app/utility/doNotSplitLines';

@Component({
  selector: 'app-ltrmpdexleca22000',
  templateUrl: './ltrmpdexleca22000.component.html',
  styleUrls: ['./ltrmpdexleca22000.component.css']
})
export class LTRMPDEXLECA22000Component implements OnInit, AfterViewInit {
  @Input() targetPerson: any =TargetMap.get("LTR_MPD_EXL_ECA22_1_000")
  @Input() fontSize = '18pt';

  //data binding
  barcodeImageSrc = '';
  logoImageSrc = '';
  targetPerson_FullAddress:any={
    L_Mem_FullName: '',
    L_Mem_Addr1: '',
    L_Mem_CityStateZip: '',
  };//收件人個人資訊
  targetPerson_footer='';//頁尾的變數組合
  newTargetPerson_2_Plan_Name_Format='';//無特殊符號（商標）的字串
  trademark='';//商標
  mainContentFontSize={font12:false,font18:false};//控制main content字體大小

  constructor(private sanitizer: DomSanitizer) { 
    if(!document.getElementById('paged-polyfill')){
      this.loadPagedJsPolyfill(); // 和rendering有關勿動
    }
    
  }

  async ngOnInit(): Promise<void> {

    this.logoImageSrc = `../assets/${this.targetPerson["2_Logo4_Id"]}.png`

    let canvas = document.createElement('canvas');
    try{
      bwipjs.toCanvas(canvas, {
        bcid: 'datamatrix', // Barcode type
        text: this.targetPerson.ReturnMailBarcode, // Text to encode
      })
      this.barcodeImageSrc = canvas.toDataURL('image/png');
    } catch(e) {
      console.log(e)
    }
    
    this.targetPerson_footer=`${this.targetPerson.L_TimeStamp} - ${this.targetPerson.L_MCarrier_OpID}${this.targetPerson['2_Primary_Key_Disp']}`;
    this.fullAddressSplt(this.targetPerson.L_Mem_FullAddress);
    this.changeTargetPerson_2_Plan_Name_Format();
    this.selectFontSize(this.fontSize);

    Object.keys(this.targetPerson).forEach(key=>{
      if(!!this.targetPerson[key]){
        this.targetPerson[key] = new DoNotSplitLines(this.targetPerson[key]).setAllNoSplitLineRule().buildResultString();
      }
    });

  }

  ngAfterViewInit(): void {

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

  fullAddressSplt(element:string){
    this.targetPerson_FullAddress.L_Mem_FullName=element.split('\r')[0];
    this.targetPerson_FullAddress.L_Mem_Addr1=element.split("\r")[1];
    this.targetPerson_FullAddress.L_Mem_CityStateZip=element.split('\r')[2];
  }
  
  changeTargetPerson_2_Plan_Name_Format(){
    if(!!this.targetPerson['2_Plan_Name_Format'].includes('⌂')){
      this.newTargetPerson_2_Plan_Name_Format = this.targetPerson['2_Plan_Name_Format'].replace('⌂','');
      this.trademark = '\u00AE';
    }
  }

  selectFontSize(fontSize:string){
    Object.values(this.mainContentFontSize).fill(false)
    switch(fontSize){
      case '12pt':this.mainContentFontSize.font12 = true; break;
      case '18pt':this.mainContentFontSize.font18 = true; break;
    }
  }

}
