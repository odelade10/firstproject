//primitive data type

console.log(typeof"john is a boy");
console.log(typeof 3242245342)
console.log(typeof true)
console.log(typeof false)
console.log(typeof null)
console.log(typeof undefined)

// variables
 var things="container";
things="can";
things="cloth";
console.log(things)
//constant can't be change
const model= "nissan";
console.log(model)
// let can be change
let car="corolla";
console.log(car)
// strings properties and functions examples

var streetName="diamond";
var streetNum=streetName.length;
 console.log(streetNum);

//strings function 
var dNumber=streetName.indexOf("d")
console.log(dNumber);
var AlhNum=streetName.charAt(1);
console.log(AlhNum);
var numTwo=streetName.charAt(4)
console.log(numTwo);

 // uppercase function or method
var uppercase= streetName.toUpperCase()
console.log(uppercase);

// slice
var del=streetName.slice(1,3)
console.log(del);

//slice method


//reference data type
//array
var names=["john","peter","susan"]
console.log(names)
console.log(names[0])
var name1=names[0];
console.log(name1)
var name2=names[2]
console.log(name2)


// console.log(names[names.length-1]);


 var person1="john";
var person2="sarah";

var literals = (`${person1} is married to ${person2}`);
console.log(literals);


//for loop
var numbers =[1,2,3,4,5,6,7,8]
var i;
for (i=0 ; i<numbers.length; i++){
    console.log(i);
}

//if statement 
 var num="15"
 if (num==10){
    console.log("worked");
}
 else{
     console.log("error");
 }

// switch 

// javascript start
// log to console

console.log("hello world");
var greetings="hello peter";
let animals="dog,cat,goat,ram"
const num7=([3,4,4,6,46,6])
console.log(num7);
console.log(animals);
console.log(greetings);
console.error("this is error");
console.clear() 
console.warn("this is a warning")
console.time("timing");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
console.timeEnd("timing")

// variables data
// var can be resigned
var funiture= ["tables, chair"]
console.log(funiture);
funiture= "door"
console.log(funiture);

// init var
var greetings2;
console.log(greetings2);
greetings2= "morning"
console.log(greetings2); 

// let data
let first;
first ="temi"
console.log(first);
first= "sarah"
console.log(first);

//const data is always declear
const second="mary"
console.log(second);
// object
const last= "maria"
console.log(last);
const model2={ 
    modelName2: [ "lenovo","dell","hp"],
    num2: [2,3,6,7,54,589,4,9,73,4],
    year: 1995,

}
console.log(model2);
model2.year= 2008
const model3= [2,3,5,7,89]
model3.push(0)
model3.pop(90);
console.log(model3);
console.log(typeof model3);
console.log( typeof model2);
const mother= true
console.log(typeof mother);
const bol=Symbol
console.log(bol);
// object literals
const vehicle = {
    car: "yoga",
    Model: "cora",
    Year: 2007
} 
console.log(typeof vehicle);
console.clear();
// date
const todayDate= new Date()
console.log(todayDate);

//type of conversion
// number to string
let pad;
pad= [223,2232,466,3535]
console.log(pad);
console.log(typeof pad);
console.log(pad.length);
//..........
let mice= [234455,34]
console.log(mice);
console.log(mice.length);
console.log(typeof mice);

// boolean to string
let boo;
boo= [true]
console.log(boo.length);
console.log(typeof boo);

// date to string
let day=[new Date()]
console.log(day);

// array to string
var port;
port= [3,4,5,6,6]
console.log(typeof port);
console.log(port);
console.log(port.length);
console.log(port);

//to string
var ing = (7).toString()
console.log(ing);
console.log(ing.length);


//...........
const hub = 9
const hub2 = 7
const sum= hub + hub2
console.log(sum);
console.log(sum.toString());
console.log(sum.length);
console.log(typeof sum);

