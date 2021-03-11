// numbers and the object
const num1 = 13
const num2 = 6
const age = 44
let dell;
dell = num1 + num2
dell = num1 * num2
console.log(dell);


// math Object
dell= Math.PI
console.log(dell);
dell= Math.E
console.log(dell);
dell= Math.round(4.9)
console.log(dell);
dell= Math.ceil (6.4)
console.log(dell);
dell= Math.floor(7.9)
console.log(dell);
dell= Math.sqrt(64)
console.log(dell);
dell= Math.abs(-2)
console.log(dell);
dell= Math.max(3,4,7,45,8,5,46,67,56,657)
console.log(dell);
dell= Math.min(44,65,976,4654,3,345,75,35,2,35,53)
console.log(dell);
dell= Math.random(35465)
console.log(dell);
dell= Math.floor(Math.random() *30+4)
console.log(dell);
// string, method and concatenation 

const firstName = "peter"
const LastName = "sam"
let combine;
combine = firstName + LastName

console.log(combine);

//concatenation
combine = firstName +` `+ LastName
console.log(combine);
 //append
 combine = "john "
 combine += "more"
 console.log(combine);

combine ="my name is " + firstName +` `  +"and i am "+LastName +` `+ age
console.log(combine);

// lenght
var  welcome = "greetings"
welcome.length;
console.log(welcome.length);
var yours = "tense"
yours.length
console.log(yours.length);

//concat
combine = firstName.concat(` `,LastName)
console.log(combine);

combine = firstName.toUpperCase()
console.log(combine);
combine = firstName.toLowerCase();
console.log(combine);

// get the last character
combine = firstName.charAt(firstName.length-1)
console.log(combine);

combine = firstName.indexOf("r")
console.log(combine);

//substring
combine = firstName.substring( 2, 4)
console.log(combine);
combine = firstName.slice(4)
console.log(combine);

// template literals
const name='maya';
const old = 40;
const job = 'accountant';
const city = 'lagos';

let html;
//with template strings (es6)
html = `<ul> 
    <li> Name: ${name}</li>
    <li> Age: ${old}</li>
    <li> Job:${job}</li>
    <li> multi:${2 * 6}</li>
    <li> :${100 / 2}</li>
</ul>
`;

document.body.innerHTML = html;
console.log(html);

// create array
const numbers = [43,3,554,45,46,6,57,7,67,68,576,7,57,75]
const numbers2 = new Array(2,54,86,8,46,79,46)
const cars = ['toyota', 'ford','BMW', 'Audi']
const mixed = ['mango',4,undefined, true, null, {a:2, c:4}, new Date()];

console.log(mixed);

let boy;

//get array lenght
boy = numbers.length;
// check if array
boy = Array.isArray(numbers);
// get single value
boy = numbers[4];
// insert into array
numbers[3]= 120;
// find the index
boy = numbers.indexOf(46);

// MUTATING ARRAY
// add to end
numbers.push(87);
 // add to front 
 numbers.unshift(3)
 // take of from the end
 numbers.pop();
 // takeoff from the front
 numbers.shift();
 // splice
 numbers.splice(3,3)
//REVERSE
numbers.reverse()

// concatenate
boy = numbers.concat(numbers2)
//sorting
boy = cars.sort()
boy = numbers.sort()
console.log(numbers);
console.log(boy);