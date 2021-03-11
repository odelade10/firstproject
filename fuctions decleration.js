// function deceleration
function greet( firstName = 'peter', LastName = 'paul') {
    return "what up"+ " " + firstName + " "+ LastName;
  
}
console.log(greet());

//FUNCTION EXPRESSION
const mild = function (x) {
    return x*x;
};
console.log(mild(4));

// IMMEDIATELY INVOKE FUNCTION EXPRESSION -  IIFEs
(function(jaw) {
   alert('hello '+ jaw);
    
})( 'shell');
 

//FOR LOOP 
 for (let d = 0; d < 10; d++) {
     if (d === 6) {
         console.log('my number is  6');
         continue;
     }

     if (d ===8) {
         console.log( 'stop');
         break;
         
     }
    console.log('number '+ d);
     
 }

 //while loop

 let u = 3;
 while (u === 3) {
     console.log('number ' + u);
 }


function myname(b){
alert(a+a)
var a =6
}
console.log(a)

// alert(myname(6))
// const name =()=>{

// }

