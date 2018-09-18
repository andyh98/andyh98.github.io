//selecting canvas element from HTML code
//Object c provides methods and properties for drawing on the canvas
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

//pen is initially off
var click = 0;

// //pen variable
// var pen = new Image();
// pen.src = "pen.png";
// //draw pen image once it has loaded
// pen.onload = function(){
//   c.drawImage(pen,150,75);
// }

//penclick sound
var penClick = new Audio ("pen_click.mp3");

//pen click when user clicks
var penBody = document.getElementById("pen_body");

// var pen =document.getElementById("pen");
pen.addEventListener('click', function (event){
  penClick.play();
   //turn drawing mode on
  if (click == 0){
    penBody.style.top="0px";
    click = 1;
  }
  //turn drawing mode off
  else{
    penBody.style.top="20px";
    click = 0;
  }
})

//mouse

//Window Resizing
window.addEventListener('resize', function(event){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  c.fillStyle = '#383B3D';
  c.fillRect(0,0, window.innerWidth, window.innerHeight);
});

//setting width and height of canvas equal to that of window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//background colour
 c.fillStyle = '#383B3D';
 c.fillRect(0,0, window.innerWidth, window.innerHeight);

// //title
// c.font = "30px Roboto Condensed";
// c.fillStyle = "white";
// c.fillText("Live Pen",30,40);
//
// //Author
// c.font = "20px Roboto Condensed";
// c.fillStyle = "white";
// c.fillText("Andy Hameed",window.innerWidth - 150,40);
