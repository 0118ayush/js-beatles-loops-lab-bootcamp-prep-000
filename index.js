


function theBeatlesPlay (musicians, instruments){
 var emptyArray = []; 
 for (let i = 0; i <= 3; i++){
   emptyArray.push(musicians[i] + " plays " + instruments[i]);
 } return emptyArray
}

var i = 0; 

function johnLennonFacts(facts){
  var newFacts = [];
  while (i < facts.length){
  var random = facts[i++] + "!!!";
  newFacts.push(random)
  } return newFacts
}





/*
function iLoveTheBeatles (x){
  var newArray = []; 
  do {newArray.push("I love the Beatles!")}
  while (x++; )
}

*/