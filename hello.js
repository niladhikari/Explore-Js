var temperature = 30;
var emotionLevel = 80;
var iqLevel = 90;
console.log(temperature,emotionLevel,iqLevel);
console.log(typeof emotionLevel);
console.log(iqLevel);

const Name = 'Hridoy Adhikari';
console.log(Name);
console.log(typeof Name);

var isHot = true;
console.log(isHot);
console.log(typeof isHot);

let x = 5 + 2 + 3;
console.log(x)

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());
console.log(sentence.indexOf('fox'));

var number1 = 12,number2 = '14.5';
console.log(number1+number2);
number2 = parseFloat(number2); // string convart to float number
console.log(number1+number2);
number2 = parseInt(number2); //float number convart to int
console.log(number1+number2);

var num1 = 15, num2 = '10.5';
num2=+num2; //shortcut string convart to float number
console.log(num1+num2)

var number3 = 10, number4 = 20;
number3 = ''+number3; // int to string convart
console.log(number3+number4);

var a = 0.2 , b = 0.3;
var total = a + b;
total = total.toFixed(3) //defines how many decimal places to go to
console.log(total)

//mathmatic

var price1 = 35, price2 = 13;
var totalPrice = price1 + price2;
console.log(totalPrice);
var totalPrice = price1 - price2;
console.log(totalPrice);
var totalPrice = price1 * price2;
console.log(totalPrice);
var totalPrice = price1 / price2;
console.log(totalPrice);
var totalPrice = price1 % price2;
console.log(totalPrice);

// string addition
 var firstName = 'Hridoy', secondName = 'Adhikar';
 var fullName = firstName +' '+secondName;
 console.log(fullName);

 //Math absolute round floor ceil random
 var number = -10;
 var absoluteNumber = Math.abs(number);
 console.log(absoluteNumber);
 var num = 9.55;
 var result = Math.round(num);
 console.log(result);
 var result = Math.random(num);
 console.log(result);
 var result = Math.floor(num);
 console.log(result);
 var result = Math.ceil(num);
 console.log(result);