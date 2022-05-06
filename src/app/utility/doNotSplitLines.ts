import { from } from "rxjs";
import { distinct, filter, map, mergeMap, pluck, tap } from "rxjs/operators";

export class DoNotSplitLines {
    private regMainGlossary = /(Cigna\sExtra)|(Cigna\sEssential)|(Ohio\sCarpenters(’|'))|(Pipe\sFitters(’|'))|(C-SNP)|(D-SNP)|([\(]CASEBP[\)])|([\(]HMO\sC-SNP[\)])|([\(]HMO\sD-SNP[\)])|([\(]PDP[\)])|([\(]PPO[\)])|([\(]The\sMedical\sTrust[\)])|(AmeriGroup)|(BCN\sAdvantage)|(Blue\sCare)|(Blue\sCross)|(Blue\sShield)|(BlueCarePlus)|(BlueCross)|(BlueShield)|(Bravo\sHealth)|(CareSource)|(Catskill\sArea)|(CHRISTUS\sHealth)|(Churchwide\sHealthcare)|(Cigna\sAchieve)|(Cigna\sAlliance)|(Cigna\sCorporation)|(Cigna\sHealth)|(Cigna\sIntellectual)|(Cigna\sPreferred)|(Cigna\sSecure)|(Cigna\sTotalCare)|(Cigna\sTrue)|(Clear\sSpring)|(CMS\sEnergy)|(Community\sHealth)|(ConnectiCare)|(Consumers\sEnergy)|(Cummins)|(Emblemhealth)|(EmblemHealth)|(Eon\sHealth)|(Episcopal\sChurch)|(ETS\sRetiree)|(Excellus\sBlueCross)|(Express\sScripts)|(Georgia\sMedicaid)|(GuildNet)|(Health\sInsurance)|(HealthSpring)|(Highmark\sBlue)|(Highmark\sHealth)|(Highway\sPatrol)|(HIP\sHealth)|(HMO\sSNP)|(Leon\sMedical)|(Medco\sContainment)|(Medica\sCommunity)|(Medica\sHealth)|(Medica\sInsurance)|(Medica\sSelf-Insured)|(Medical\sMutual)|(Medicare\sAdvantage)|(MedStar)|Mutual\sof\sOmaha\sRx|(National\sAutomatic)|(Network\sHealth)|(NTCA\sGroup)|(Oak\sRidge)|(Omaha\sHealth)|(Omaha\sLife)|(Port\sAuthority)|(Portico\sBenefit)|(SCAN\sConnections)|(SCAN\sHealth)|(The\sBoard)|(The\sPort)|(UAW\sRetiree)|(UCare)|(UCare\sConnect)|(UCare’sMSHO)|(University\sof)|(UPMC\sfor\sLife)|(UPMC\sfor\sYou\sInc.)|(UPMC\sHealth)|(UT-Battelle)|(Village\sHealth)|(WPS\sMedicare)|(WPS\sMedicareRx)|(ZF\sTRW)/g
    private regPlanAndClientName = /(Cigna\sPrimary)|(Priority\sHealth)|(Express\sScripts)|(SCAN\sHealth\sPlan)|(Blue\sCross)|(Blue\sShield)|(UPMC\s<i>for\sLife<[\/]i>)/g;
    private regUSAStateName = /(Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New\sHampshire|New\sJersey|New\sMexico|New\sYork|North\sCarolina|North\sDakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode\sIsland|South\sCarolina|South\sDakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West\sVirginia|Wisconsin|Wyoming)(\sCity){0,1}/g
    private regUSACityName = /(New\sYork|Los\sAngeles|Chicago|Houston|Phoenix|Philadelphia|San\sAntonio|San\sDiego|Dallas|San\sJose|Austin|Jacksonville|Fort\sWorth|Columbus|Indianapolis|Charlotte|San\sFrancisco|Seattle|Denver|Washington|Nashville|Oklahoma\sCity|El\sPaso|Boston|Portland|Las\sVegas|Detroit|Memphis|Louisville|Baltimore|Milwaukee|Albuquerque|Tucson|Fresno|Sacramento|Kansas\sCity|Mesa|Atlanta|Colorado\sSprings|Raleigh|Long\sBeach|Virginia\sBeach|Miami|Oakland|Minneapolis|Tulsa|Bakersfield|Wichita|Arlington|Aurora|Tampa|New\sOrleans|Cleveland|Honolulu|Anaheim|Lexington|Stockton|Corpus\sChristi|Henderson|Riverside|Newark|Saint\sPaul|Santa\sAna|Cincinnati|Irvine|Orlando|Pittsburgh|St.\sLouis|Greensboro|Jersey\sCity|Anchorage|Lincoln|Plano|Durham|Buffalo|Chandler|Chula\sVista|Toledo|Madison|Gilbert|Reno|Fort\sWayne|North\sLas\sVegas|St.\sPetersburg|Lubbock|Irving|Laredo|Winston–Salem|Chesapeake|Glendale|Garland|Scottsdale|Norfolk|Boise|Fremont|Spokane|Santa\sClarita|Baton\sRouge|Richmond|Hialeah|San\sBernardino|Tacoma|Modesto|Huntsville|Des\sMoines|Yonkers|Rochester|Moreno\sValley|Fayetteville|Fontana|Columbus|Worcester|Port\sSt.\sLucie|Little\sRock|Augusta|Oxnard|Birmingham|Montgomery|Frisco|Amarillo|Salt\sLake\sCity|Grand\sRapids|Huntington\sBeach|Overland\sPark|Glendale|Tallahassee|Grand\sPrairie|McKinney|Cape\sCoral|Sioux\sFalls|Peoria|Providence|Vancouver|Knoxville|Akron|Shreveport|Mobile|Brownsville|Newport\sNews|Fort\sLauderdale|Chattanooga|Tempe|Aurora|Santa\sRosa|Eugene|Elk\sGrove|Salem|Ontario|Cary|Rancho\sCucamonga|Oceanside|Lancaster|Garden\sGrove|Pembroke\sPines|Fort\sCollins|Palmdale|Springfield|Clarksville|Salinas|Hayward|Paterson|Alexandria|Macon|Corona|Kansas\sCity|Lakewood|Springfield|Sunnyvale|Jackson|Killeen|Hollywood|Murfreesboro|Pasadena|Bellevue|Pomona|Escondido|Joliet|Charleston|Mesquite|Naperville|Rockford|Bridgeport|Syracuse|Savannah|Roseville|Torrance|Fullerton|Surprise|McAllen|Thornton|Visalia|Olathe|Gainesville|West\sValley\sCity|Orange|Denton|Warren|Pasadena|Waco|Cedar\sRapids|Dayton|Elizabeth|Hampton|Columbia|Kent|Stamford|Lakewood|Victorville|Miramar|Coral\sSprings|Sterling\sHeights|New\sHaven|Carrollton|Midland|Norman|Santa\sClara|Athens|Thousand\sOaks|Topeka|Simi\sValley|Columbia|Vallejo|Fargo|Allentown|Pearland|Concord|Abilene|Arvada|Berkeley|Ann\sArbor|Independence|Rochester|Lafayette|Hartford|College\sStation|Clovis|Fairfield|Palm\sBay|Richardson|Round\sRock|Cambridge|Meridian|West\sPalm\sBeach|Evansville|Clearwater|Billings|West\sJordan|Richmond|Westminster|Manchester|Lowell|Wilmington|Antioch|Beaumont|Provo|North\sCharleston|Elgin|Carlsbad|Odessa|Waterbury|Springfield|League\sCity|Downey|Gresham|High\sPoint|Broken\sArrow|Peoria|Lansing|Lakeland|Pompano\sBeach|Costa\sMesa|Pueblo|Lewisville|Miami\sGardens|Las\sCruces|Sugar\sLand|Murrieta|Ventura|Everett|Temecula|Dearborn|Santa\sMaria|West\sCovina|El\sMonte|Greeley|Sparks|Centennial|Boulder|Sandy\sSprings|Inglewood|Edison|South\sFulton|Green\sBay|Burbank|Renton|Hillsboro|El\sCajon|Tyler|Davie|San\sMateo|Brockton|Concord|Jurupa\sValley|Daly\sCity|Allen|Rio\sRancho|Rialto|Woodbridge|South\sBend|Spokane\sValley|Norwalk|Menifee|Vacaville|Wichita\sFalls|Davenport|Quincy|Chico|Lynn|Lee's\sSummit|New\sBedford|Federal\sWay|Clinton|Edinburg|Nampa|Roanoke)/g
    private regPhoneNumber = /(([\(]{0,1}TTY:\s1.800.716.3231[\)]{0,1})|([\(](201)[\)]\s\d{3}-\d{4})|([\(]{0,1}TTY:{0,1}\s711[\)]{0,1})|(\d{1}-\d{3}-\d{3}-\d{4})) {0,1}/g
    private regSpecialPhoneNumber = /((\d{1}-\d{3}-\d{3}-\d{4})\s{0,1})\s([\(]{0,1}TTY:{0,1}\s711[\)]{0,1})/g;
    private regTime = /([1]{0,1}\d(:[0-6]\d){0,1}\s(AM|PM)(\s-\s){0,1})|([1]{0,1}\d(:[0-6]\d){0,1}\s((a[\.]m[\.])|(p[\.]m[\.])|(p[\.]m))(\s-\s){0,1})/g
    private regDrug = /\d{1,4}[\.]{0,1}\d{0,3}\s((MG[\/]ML)|(MG[\/]GM)|(MCG[\/]GM)|(IU[\/]ML)|(ML[\/]ML)|(U[\/]ML)|(MCG[\/]DOSE)|(MG[\/]DOSE)|(MIU[\/]ML)|MG|MCG|DOSE|GM|ML|MCG|IU|UNIT|MIU)/g

    private _resultString:string='';

    constructor(private detector:string | object){
        if(typeof(this.detector) == 'object'){
            Object.values(this.detector).forEach(str=>{
                this.onInit(String(str));
            })
        }else {
            this.onInit(this.detector);
        }
    }

    private onInit(str:string){
        
        this._resultString = str;
    }

    /* no split line */
    /* Plan Name and Client Name*/
    private getPlanName(detStr:string){
        return detStr.match(this.regPlanAndClientName)
    }

    private getInc(detStr:string){
        return detStr.match(/((\s(St. Louis|\w*),\sInc.))/g)
    }
    /* City and State Name */
    private getUSAStateOfName(detStr:string){
        return detStr.match(
            //   /(City|State) of (([A-Z]\w+\sof\s[A-Z]\w+)|([A-Z]\w+\s[A-Z]\w+)|([A-Z]\w+))/
            /State of (Alabama|Alaska|Arizona|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming)/g
            );
        
    }
    /* phone number */
    private getPhoneNumber(detStr:string){
        return detStr.match(this.regPhoneNumber);
    }
    private getUSAStateName(detStr:string){
        return detStr.match(
            //   /(City|State) of (([A-Z]\w+\sof\s[A-Z]\w+)|([A-Z]\w+\s[A-Z]\w+)|([A-Z]\w+))/
            this.regUSAStateName
            );
    }

    private getUSACityOfName(detStr:string){
        return detStr.match(/City of (New York|Los Angeles|Chicago|Houston|Phoenix|Philadelphia|San Antonio|San Diego|Dallas|San Jose|Austin|Jacksonville|Fort Worth|Columbus|Indianapolis|Charlotte|San Francisco|Seattle|Denver|Washington|Nashville|Oklahoma City|El Paso|Boston|Portland|Las Vegas|Detroit|Memphis|Louisville|Baltimore|Milwaukee|Albuquerque|Tucson|Fresno|Sacramento|Kansas City|Mesa|Atlanta|Omaha|Colorado Springs|Raleigh|Long Beach|Virginia Beach|Miami|Oakland|Minneapolis|Tulsa|Bakersfield|Wichita|Arlington|Aurora|Tampa|New Orleans|Cleveland|Honolulu|Anaheim|Lexington|Stockton|Corpus Christi|Henderson|Riverside|Newark|Saint Paul|Santa Ana|Cincinnati|Irvine|Orlando|Pittsburgh|St. Louis|Greensboro|Jersey City|Anchorage|Lincoln|Plano|Durham|Buffalo|Chandler|Chula Vista|Toledo|Madison|Gilbert|Reno|Fort Wayne|North Las Vegas|St. Petersburg|Lubbock|Irving|Laredo|Winston–Salem|Chesapeake|Glendale|Garland|Scottsdale|Norfolk|Boise|Fremont|Spokane|Santa Clarita|Baton Rouge|Richmond|Hialeah|San Bernardino|Tacoma|Modesto|Huntsville|Des Moines|Yonkers|Rochester|Moreno Valley|Fayetteville|Fontana|Columbus|Worcester|Port St. Lucie|Little Rock|Augusta|Oxnard|Birmingham|Montgomery|Frisco|Amarillo|Salt Lake City|Grand Rapids|Huntington Beach|Overland Park|Glendale|Tallahassee|Grand Prairie|McKinney|Cape Coral|Sioux Falls|Peoria|Providence|Vancouver|Knoxville|Akron|Shreveport|Mobile|Brownsville|Newport News|Fort Lauderdale|Chattanooga|Tempe|Aurora|Santa Rosa|Eugene|Elk Grove|Salem|Ontario|Cary|Rancho Cucamonga|Oceanside|Lancaster|Garden Grove|Pembroke Pines|Fort Collins|Palmdale|Springfield|Clarksville|Salinas|Hayward|Paterson|Alexandria|Macon|Corona|Kansas City|Lakewood|Springfield|Sunnyvale|Jackson|Killeen|Hollywood|Murfreesboro|Pasadena|Bellevue|Pomona|Escondido|Joliet|Charleston|Mesquite|Naperville|Rockford|Bridgeport|Syracuse|Savannah|Roseville|Torrance|Fullerton|Surprise|McAllen|Thornton|Visalia|Olathe|Gainesville|West Valley City|Orange|Denton|Warren|Pasadena|Waco|Cedar Rapids|Dayton|Elizabeth|Hampton|Columbia|Kent|Stamford|Lakewood|Victorville|Miramar|Coral Springs|Sterling Heights|New Haven|Carrollton|Midland|Norman|Santa Clara|Athens|Thousand Oaks|Topeka|Simi Valley|Columbia|Vallejo|Fargo|Allentown|Pearland|Concord|Abilene|Arvada|Berkeley|Ann Arbor|Independence|Rochester|Lafayette|Hartford|College Station|Clovis|Fairfield|Palm Bay|Richardson|Round Rock|Cambridge|Meridian|West Palm Beach|Evansville|Clearwater|Billings|West Jordan|Richmond|Westminster|Manchester|Lowell|Wilmington|Antioch|Beaumont|Provo|North Charleston|Elgin|Carlsbad|Odessa|Waterbury|Springfield|League City|Downey|Gresham|High Point|Broken Arrow|Peoria|Lansing|Lakeland|Pompano Beach|Costa Mesa|Pueblo|Lewisville|Miami Gardens|Las Cruces|Sugar Land|Murrieta|Ventura|Everett|Temecula|Dearborn|Santa Maria|West Covina|El Monte|Greeley|Sparks|Centennial|Boulder|Sandy Springs|Inglewood|Edison|South Fulton|Green Bay|Burbank|Renton|Hillsboro|El Cajon|Tyler|Davie|San Mateo|Brockton|Concord|Jurupa Valley|Daly City|Allen|Rio Rancho|Rialto|Woodbridge|South Bend|Spokane Valley|Norwalk|Menifee|Vacaville|Wichita Falls|Davenport|Quincy|Chico|Lynn|Lee's Summit|New Bedford|Federal Way|Clinton|Edinburg|Nampa|Roanoke){0,1}/g)
    }

    private getUSACityName(detStr:string){
        return detStr.match(this.regUSACityName)
    }

    /* set Main Glossary */
    setMainGlossary(){
        const mainList = this._resultString.match(this.regMainGlossary);
        if(!!mainList){
            mainList.forEach(mainStr=>{
                this._resultString = this._resultString.split(mainStr,-1).join(this.addStyleWord(mainStr));
            });
        }
        return this;
    }
    /* set Phone number */
    //處理電話相連 範例1-855-475-3163 (TTY: 711)
    setPhoneNumberException():DoNotSplitLines{
        const specialPhoneNumberList = this._resultString.match(this.regSpecialPhoneNumber);
        if(!!specialPhoneNumberList){
            specialPhoneNumberList.forEach(phoneNumber=>{
                const splitedWordList = phoneNumber.split(/(\d{1}-\d{3}-\d{3}-\d{4})/g);// ["","(\d{1}-\d{3}-\d{3}-\d{4})","TTY..."]
                const connectedWord = this.dealConnectedWord(splitedWordList[1]) + this.addStyleWord(splitedWordList[2]);
                this._resultString = this._resultString.split(phoneNumber).join(connectedWord);
            })
        }
        return this;
    }

    setPhoneNumber():DoNotSplitLines{
        const phoneNumberList = this.getPhoneNumber(this._resultString);
            //僅處理單個電話
            if(!!phoneNumberList){
                phoneNumberList.forEach(phoneNumber=>{
                    this._resultString = this._resultString.split(phoneNumber,-1).join(this.addStyleWord(phoneNumber));
                });
            }
        return this;
    }

    /* time */
    setTime():DoNotSplitLines{
        const timeList = this._resultString.match(this.regTime);
        if(!!timeList){
            timeList.forEach(timeStr=>{
                this._resultString = this._resultString.split(timeStr).join(this.addStyleWord(timeStr));
            });
        }
        return this;
    }

    /* State and City Name*/
    setStateAndCityNames():DoNotSplitLines{
        const stateOfName = this.getUSAStateOfName(this._resultString);
        const cityOfName = this.getUSACityOfName(this._resultString);
        const cityName = this.getUSACityName(this._resultString);
        const stateName = this.getUSAStateName(this._resultString);
        // const USAstate = this.detector.match(
        //   /(([A-Z]\w+\sof\s[A-Z]\w+)|([A-Z]\w+\s[A-Z]\w+)|([A-Z]\w+'s\s[A-Z]\w+)) (City)|(([A-Z]\w+\sof\s[A-Z]\w+)|([A-Z]\w+\s[A-Z]\w+)|([A-Z]\w+'s\s[A-Z]\w+))/g
        // );
    
        if (!!stateOfName) {
            stateOfName.forEach(stateStr=>{
                this._resultString = this._resultString.split(stateStr).join(this.addStyleWord(stateStr));
            });
        }else if(!!cityOfName){
            cityOfName.forEach(cityStr=>{
                this._resultString = this._resultString.split(cityStr).join(this.addStyleWord(cityStr));
            });
        }else if(!!stateName){
            stateName.forEach(stateStr=>{
                this._resultString = this._resultString.split(stateStr).join(this.addStyleWord(stateStr));
            });
        }else if(!!cityName){
            cityName.forEach(cityStr=>{
                this._resultString = this._resultString.split(cityStr).join(this.addStyleWord(cityStr))
            });
        }
        return this;
    }

    /* drug */
    setDrug():DoNotSplitLines{
        const drugList = this._resultString.match(this.regDrug);
        if(!!drugList){
            drugList.forEach(drugStr=>{
                this._resultString = this._resultString.split(drugStr).join(this.addStyleWord(drugStr));
            });
        }
        return this;
    }

    /* Plan And Client Name */
    setPlanAndClientNames():DoNotSplitLines{
        let planNameList =this.getPlanName(this._resultString);
        if (!!planNameList) {
            from(planNameList).pipe(
                filter(planStr=>!this._resultString.includes(`${planStr}, Inc`)),
                map(planStr=>{
                    this._resultString = this._resultString.split(planStr).join(this.addStyleWord(planStr))
                })
            ).subscribe()
        }
        return this;
    }

    setPlanAndClientInc():DoNotSplitLines{
        const incItem = this.getInc(this._resultString);
        if(!!incItem){
            incItem.forEach(incStr=>{
                const csstext = this.addStyleWord(incStr);
                this._resultString = this._resultString.split(incStr).join(csstext)
            });
        }
        return this;
    }

    addStyleWord(inputWord:string):string{
        const csstext =
                    // "<span style='width: 50px; height: 50px; border:1px solid purple;background-color:wheat;'>"
                    // "<span style='white-space: nowrap;'>"
                    "<span class='keyword'>"
                    + inputWord
                    + "</span>";
        return csstext
    }

    dealConnectedWord(inputWord:string):string{
        const csstext =
                    // "<span style='width: 50px; height: 50px; border:1px solid purple;background-color:wheat;'>"
                    // "<span style='white-space: nowrap; display:inline-block;>"
                    "<span class='keyword context-inline '>"
                    + inputWord
                    + "</span>";
        return csstext
    }

    setAllNoSplitLineRule():DoNotSplitLines{
        this.setDrug().setMainGlossary().setPhoneNumberException().setPhoneNumber().setPlanAndClientInc().setPlanAndClientNames().setStateAndCityNames().setTime();
        return this;
    }

    buildResultString():Readonly<string>{
        return this._resultString;
    }
}