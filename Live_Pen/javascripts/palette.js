var blue = document.getElementById("blue");
var lightblue = document.getElementById("lightblue");
var skyblue = document.getElementById("skyblue");
var grey = document.getElementById("grey");
var red = document.getElementById("red");

var palette = [blue, lightblue, skyblue, grey, red];

palette.forEach(function(color){
  color.addEventListener('click', function(){
    colorChoice = color.style["background-color"];
    cdraw.strokeStyle = color.style["background-color"];
  })
});
