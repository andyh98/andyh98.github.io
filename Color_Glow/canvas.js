//selecting canvas element from HTML code
var canvas = document.getElementById('canvas');
//Object c provides methods and properties for drawing on the canvas
var c = canvas.getContext('2d');

//defining circle arguments
var x = 40;
var y = 100;
var radius = 30;

//defining number of columns and rows sized at 80 px each
var colLim = (window.innerWidth - 100) / 80;
var rowLim = (window.innerHeight - 100) / 80;
//our array for circle objects
var circleArr = [];

for (var row = 1; row <= rowLim; row++) {
  for (var col = 1; col <= colLim; col++) {
  x += 80;
  circleArr.push(new Circle(x,y,radius, pickColor()));
  }

  x = 40;
  y += 80;
}
// var c1 = new Circle(100,100,20,"yellow");

//setting width and height of canvas equal to that of window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//background colour
 c.fillStyle = '#383B3D';
 c.fillRect(0,0, window.innerWidth, window.innerHeight);

//Event Listeners
window.addEventListener('resize', function(event){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  c.fillStyle = '#383B3D';
  c.fillRect(0,0, window.innerWidth, window.innerHeight);
});


window.addEventListener('click', function(){
  circleArr.forEach( function (circle){
    return circle.reappear();
  });
})

function update(){

  c.clearRect(0,0, innerWidth, innerHeight);
  c.fillStyle = '#383B3D';
  c.fillRect(0,0, window.innerWidth, window.innerHeight);

  //title
  c.font = "30px Roboto Condensed";
  c.fillStyle = "white";
  c.fillText("Color Glow",30,40);

  //Author
  c.font = "20px Roboto Condensed";
  c.fillStyle = "white";
  c.fillText("Andy Hameed",window.innerWidth - 150,40);

  circleArr.forEach( function (circle){
    return circle.draw();
  });
}

//recursive function repeats as long as script is running
function animate(){
  requestAnimationFrame(animate);
  update();

}

animate();

// //creating gradient for the circle
//
// //context.createRadialGradient(x0,y0,r0,x1,y1,r1);
// var grad = c.createRadialGradient(100,100,10,100,100,30)
// //add color stops to gradient
// grad.addColorStop(0,"#922C30");
// grad.addColorStop(1,"#CA3C42");
//
// function createCircle() {
//
// //Creating a circle
// c.beginPath();
// //context.arc(x,y,r,sAngle,eAngle,counterclockwise)
// c.arc(x,y,30,0, Math.PI * 2, false )
// c.fillStyle = grad;
// c.shadowBlur = 30;
// c.shadowColor = "white";
// c.fill();
// }
