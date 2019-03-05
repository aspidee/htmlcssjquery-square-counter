var red = $(".left");
var black = $(".center");
var white = $(".right")
black.text("0");

function counterNumber(){

  var number = red.text();
  red.click(function () {
    black.text(number-- -1);
  });

  white.click(function () {
    black.text(number++ +1);
  });
}

counterNumber();

















// var red = $(".left");
// var black = $(".center");
// var white = $(".right")
//
// function Increment(){
//
//   var counter = red.text();
//   red.click(function () {
//     black.text(counter-- -1);
//   });
//
//   white.click(function () {
//     black.text(counter++ +1);
//   });
// }
//
// Increment();



// -------------------------------------------

// function aumenta() {
// numero = document.getElementById("numero").innerHTML;
// numero++;
// document.getElementById("numero").innerHTML = numero;
// }
//
// function diminuisci() {
// numero = document.getElementById("numero").innerHTML;
// numero--;
// document.getElementById("numero").innerHTML = numero;
// }
// </script>
//
// function seleziona(){
// document.getElementById("risultato").innerHTML++;
// }



//----------------------------------
// function getRandom(min, max) {
//
//   return Math.floor(Math.random() * (max - min)) + min;
// }
