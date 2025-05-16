import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
}  
//Esto es lo nuevo 

function pickRandom (array){
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse(){
      
  const randomwho = pickRandom (who);
  const randomaction = pickRandom (action);
  const randomwhat = pickRandom (what);
  const randomwhen = pickRandom (when);

  return randomwho + randomaction + randomwhat + randomwhen;
}

console.log(generateExcuse());


// ESTO ES LO ANTERIOR
//function generateExcuse(){
  //const randomwho = who[Math.floor(Math.random()* who.length )];
  //const randomaction = action[Math.floor(Math.random()* action.length)];
  //const randomwhat =what [Math.floor(Math.random()* what.length)];
  //const randomwhen = when [Math.floor(Math.random()* when.length)];

  //return`${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
//}
    
  
  //document.getElementById("excuse").innerHTML = generateExcuse();
//};
