let myday=prompt("enter the date:");
let tday=new Date(myday);
let ysdate=tday.getDate();
let ysans=ysdate-1;
console.log(ysans);
let ysday=tday.getDay();
let ysdayans=ysday-1;
console.log(ysdayans);
if (ysdayans=="0")
 {
	 console.log("sunday");
 }
 else if(ysdayans=="1")
 {
	 console.log("Mon");
 }
 else if(ysdayans=="2")
 {
	 console.log("TUE");
 }
 else if(ysdayans=="3")
 {
	 console.log("wed");
 }
 else if(ysdayans=="4")
 {
	 console.log("THU DAY");
 }
 else if(ysdayans=="5")
 {
	 console.log("friday");
 }else if(ysdayns=="6")
 {
	 console.log("sat");
 }