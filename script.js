// Programming
// Computer sey baat krney ka aik tareeqa aik protocol hota hai

// ECMA Script
// Aik standar hai jisko javascript follow krti hai

//JavaScript Execution
// Browser, Node Js Application (Run time broswer ka js engine in c++), html meyn, Online Environments (Replit)
// Intraction Application creat kr sktey hain
// Bgher refresh k browser mey kaam kr skti hai

// Rules in JS
// Syntax in JavaScript console.log -- console.tullu h.ha

// Datatypes in JavaScript, Primitive, Fundamental
// String
// Symbol
// Number
// Null
// Boolean
// BigInt
// undefined

// let a = "Leon";
// let b = Symbol("I am a nice symbol");
// let c = 786;
// let d = null;
// let e = true;
// let f = BigInt("576")
// let g = undefined;

// console.log(a,b,c,d,e,f,g)
// console.log(typeof(f))
 
// Non primitive data type
// Object

// const item = {
//         name : "Leon",
//         age : 24,
//         status : true
// }
// console.log(item["name"])

// we cam add and edit in object
/*
const item = {
    name : "Leon",
    age : 45,
    class : "Sixth"
}
item["name"] = "Harry"
item["status"] = true;
console.log(item)
*/

// Variables (Containers in computer memory RAM)
// Declaration of Variable
// var Identifier = assignment operator = literal/constant lafzi, asal, mustaqil
// letters digits underscore_ dollar sign$ allowed
// must begin with a letter underscore or dollar sign not with a number
// Reserved words cant be used like var 
// case sensitive Harry and harry are both different words

// var a = 10; PRE ES6 global scope, recreate and redeclated
// let b = 20; block scope variable
// const c  = 30;
// Key Pair Values called Object

// Expressions and Opertors
// koi bhi aik value jo hum variable ko detey hain
// most of the times hum js mey computation krtey hain 
// jis k liye hum operators use krte hain

// Operands Operators Result

// console.log(!true)

// Arithmetic Operators
// + - / * **Expaniation/Powerof %Remainder -- ++

// Assignment Operators
// = += -= /= *= **= %= --= ++=
// value, value and typeof

// Comparison Operators Jahan humeyn compare krna prhta hai 2 ya us se ziada cheeson ko
// == != === !== > < >= <= ?Turnery (Tigna) Operator

// Logical Operators
// || && !

// Conditional Expressions
// if 
// if else
// if else if else

// let a = prompt("What's your age?")
// let b = alert("Hey! How are you?")
//  a = Number.parseInt(a)
//  console.log(typeof(a))
// if(a>0){
//     alert(a + " " + "is your valid age")
// }else{
//     alert(a + " " + "is invalid age")
// }

// if(a<9){
//     alert("You can not even think of driving!")
// }else if(a<18 && a>9){
//     alert("You can learn Driving once you are 18")
// }else{
//     alert("Your age is valid for driving")
// }

// Turnery Operator
// let a = prompt("What is your age?");
// a = Number.parseInt(a)
// alert( a<18 ? "Under Age" : "Over Age")

// let a = prompt("What do you need?")
// let b = a
// switch (b){
//     case "Orange" :
//         console.log("These are 6 dozens of oranges");
//         break;
//     case "Mango" :
//         console.log("2kg of Mango Crate is available");
//         break;
//     default :
//         console.log("Not available!")
// }

/*
use of logical operators for the age between 10-20
let a = prompt("What is your age?")
if(a>10 && a<20){
    alert("Your age lies between 10-20")
}else{
    alert("You are not between 10-20!")
}*/

// Demonstrate mazahra switch statemetn
// let a = prompt("What fruit do you want?");
// switch(a){
//     case "Mangoes" :
//         alert("We have a crate of mangoes!");
//         break;
//     case "Oranges" :
//         alert("Only 3 Dozens of oranges are in our store!")
//         break;
//     case "Banana" :
//         alert("You can get 5 branches of Bananas including 23 per branch");
//         break;
//     default :
//         alert("Sorry! We dont have such fruit!")
// }

// divisible number by 2 or 3 qabile taqseem
// let a = prompt("Enter a valid number!")
// a = Number.parseInt(a);
// console.log(a)
// if(a%2 == 0 || a%3 == 0){
//     alert("This number is divisible by 2 or 3")
// }else{
//     alert("Your number is not divisible by 2 or 3")
// }

// ternary opertaor
// let a = prompt("what is your age?")
// a = Number.parseInt(a)
// alert(a<18? "You are not valid" : " You can drive a CAR!")

// Loop
// For Loop
// for in loop object k liye use kia jata hai
// for of aik string ko letter by letter loop kr deta hai
// while loop true or false condition k sath chalta hai
// do while loop kmsey km aik baar execute hote e hai pehely block run hota hai phir condition check hoti hai

// for(i=0; i<5; i++){
//     console.log(i+1)
// }

// let sum = 0
// let n = prompt("Enter a value!")
// n = Number.parseInt(n)
// for(i=0; i<n; i++){
//     sum += (n+1)
// }
// console.log("Sum of first n " + n + " Natural Number is " + sum)

// const items = {
//     name : "Leon",
//     age : 37,
//     status : true,
//     class : "7th",
//     city : "Dublin"
// }
// for(let a in items){
//     console.log("Key value of " + a + " is " + items[a])
// }

// for(let a of "Pakistan"){
//     console.log(a)
// }

// let n = prompt("enter a value!")
// n = Number.parseInt(n)
// let i = 0
// while(i<n){
//     console.log(i+1)
//     i++
// }

// let n = prompt("Enter a value!");
// let i = 0
// do{
//     console.log(i+1)
//     i++
// }while(i<n)

// let n = prompt("Enter a value!");
// let i = 10
// do{
//     console.log(i+1)
//     i++
// }while(i<n)