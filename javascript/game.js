var letters = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

for( var keyCode = 97; keyCode < 123; keyCode++){
  var str = String.fromCharCode(keyCode)
 letters.push(str)
}
console.log(letters);

var reset = function(){
  guessesLeft = 10
  guesses =[];
  computerGuess = letters[Math.floor(Math.random() * letters.length)];

}

var updateGuesses = function() {


   document.querySelector('#guesses').innerHTML = guesses.join(', ');
};

computerGuess=
letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event){

guessesLeft--;
var userGuess =  "" + event.key.toLowerCase();

guesses.push(userGuess);
console.log(guesses);




if (userGuess === computerGuess){
  wins++;
  alert("Looks like you are psychic!")
  reset();
  }


if (guessesLeft === 0){
  losses++
  alert("HA! I knew you weren't psychic!")
  reset();
}




console.log("computer selects " + computerGuess);
console.log("You select " + userGuess);


  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guesses").innerHTML = guesses;


}
