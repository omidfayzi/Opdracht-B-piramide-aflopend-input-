var number = document.getElementById('arrayNumber');
var submitButton = document.getElementById("submit");
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var PG = document.getElementById("h1");

submitButton.onclick = arrayPiramide;

function arrayPiramide() {
	arrayNumbers = [];
  text.innerHTML = "";
	text2.innerHTML = "";

  for (var i = 0; i <= number.value; i++) {
      arrayNumbers.push(i);
      text2.innerHTML = "Array "  + arrayNumbers.join(", ");
      console.log(arrayNumbers);
   } for (var j = 0; j <= number.value; j++) {
     	text.innerHTML += arrayNumbers.join(" ") + "<br>";
     	arrayNumbers.splice(arrayNumbers.length -1);
     }
  
  number.value = "";
  arrayNumbers = [];  
}

