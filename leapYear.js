/*var year = 1920;

if(year%400==0){
   console.log("This is LeapYear");
}
else if(year%4==0 && year%100!=0){
    console.log("This is LeapYear");
}
else{
    console.log("This is not LeapYear");
}*/

var year = 1920;
if(year%400==0 || year%4==0 && year%100!=0){
    console.log("This is LeapYear");
}
else{
    console.log("This is not LeapYear");
}


