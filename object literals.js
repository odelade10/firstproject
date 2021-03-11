// object literals
const human = {
    firstName: 'john',
    LastName: 'mark',
    Age: 20,
    email:'odelade10@yahool.com',
    hobbies: ['singing','dancing'],
    address:{
        city: 'ikeja',
        state:'lagos'

    },
    getBirthYear: function () {
        return 2021 - this.Age
        
    }


}

let hum;
hum = human;
// get specific value
hum = human.firstName;
hum = human.Age;
hum = human.hobbies[0];
hum = human.address['state'];
hum = human.getBirthYear();
console.log(hum);


// date and time
let val;

const  today = new Date();
let birthday = new Date("3-9-2021");
let birthday2 = new Date();
val = today.getMonth();
val= today.getUTCFullYear();
val = today.setDate()
val = today.getUTCMinutes()

birthday2.setMonth(6)
birthday2.setFullYear(1992)


console.log(val);
console.log(birthday2);

// if statement 
const id = 200

// equal to
if (id == 200) {
    console.log('correct');
}
else {
    console.log('incorrect');
}

//not equal to

if (id != 203) {
    console.log('correct');
}
else {
    console.log('incorrect');
}

// equal value and type
if (id === 200) {
    console.log('correct');
}
else {
    console.log('incorrect');
}

if (id !== 200) {
    console.log('correct');
}
else {
    console.log('incorrect');
}

//logical operator
 const name1 = "tom"
 const age3 = 20;
// AND &&
 if (age3 > 0 && age3 < 15) {
     console.log(`${name1} is a child`);
     
 }
 else if (age3 >= 12 && age3 <= 19) {
     console.log(`${name1} is a teen`);
 }
 else {
     console.log(`${name1} is an adult`);
 }


 // or ||
if (age3 < 15 || age3 > 50 ) {
    console.log( `${name1} cannot vote`);
}
else{
    console.log(`${name1} can vote`);
}

// ternary operator
console.log(id === 200 ? 'correct' : 'incorrect');


// SWITCH
const color  = 'blue';
switch(color){
    case 'yellow':
    console.log('color is yellow');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    case 'brown':
    console.log('color is brown');
    break;
    case 'red':
    console.log('color is red');
    break;
    default: 
    console.log('wrong color');
    break;

    }
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = 'Sunday';
        break;
        case 1:
            day = 'monday';
        break;
        case 2:
            day = 'tuesday';
        break;
        case 3:
            day = 'wednesday';
        break;
        case 4:
            day = 'wednesday';
        break;
        case 5:
            day = 'thursday';
        case 5:
            day = 'friday';
        break;
        case 6:
            day = 'saturday';
        
    }

console.log(`Today is ${day}`);
