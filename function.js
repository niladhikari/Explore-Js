/*function myActivity() {
    console.log('My name is Hridoy')
    console.log('I am Student')
    console.log('I am reading is CSE dept')
    console.log('I like to play football')
}

myActivity();
myActivity();*/

/*function sumCalculation(){
    var sum = 0;
    for(var i=1; i<=10; i=i+2){
       
        sum = sum+i;
    
    }
    console.log(sum);
    
}
sumCalculation();*/

var fullName = "Hridoy"  //function global variable
function myName() {
    console.log('My name is Hridoy');
    console.log(fullName);
    fullName = 'Nil Adhikari' //function edit the global variable
}

myName();
console.log(fullName)  // edit the global variable this variable use the outside in the function


function addNumber(num1 , num2) { //there num1 and num2 are paramater
    result = num1 + num2;
    return result;
}

var sum = addNumber(5,6);        //there 5 , 6 are argument
console.log(sum);