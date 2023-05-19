
var friendsName = ['Mahbub','Rakib','Imran','Sakil']; // how to define array value
friendsName[4] = 'Arif';  //how to add new index value

friendsName[friendsName.length-1] = 'puja'; //how to add last index value
friendsName[3] = 'Akbor'; //how to replace the index name
console.log(friendsName);

console.log(friendsName[friendsName.length-1]); //how to fine last index name
friendsName.push('Raju','Najmul') //push help to add new index or item in the array to last
console.log(friendsName);

friendsName.pop() //pop help to remove the last index or item in the array
console.log(friendsName);

console.log(friendsName.length); //how to find array lenght
friendsName.unshift('Najmul','Anik');//unshift help the add index or item at the beginning in the array
console.log(friendsName);

friendsName.shift();//shift help the remove index or item at the beginning in the array
console.log(friendsName);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3); // concat() method is used to add more than two arrays 
console.log(myChildren);

const myBaccha = myChildren.slice(2,5); //jodi kon index bad diye onno index gula dekhte hoy tar jonno slice method use hoy
console.log(myBaccha);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2);  //er madhome kon index remove,add or replace kore use kora jay
console.log(fruits);
fruits.splice(1, 1, "Lemon", "Kiwi");
console.log(fruits);