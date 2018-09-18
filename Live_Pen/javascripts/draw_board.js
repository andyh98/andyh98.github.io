//selecting canvas element from HTML code
//Object c provides methods and properties for drawing on the canvas
var drawingCanvas = document.getElementById('drawing_board');
var cdraw = drawingCanvas.getContext('2d');

//Mouse is clicked down and being dragged
var dragging = false;

//line thickness is twice the radius
var radius = 5;

//global variable will be manipulated
var colorChoice = "#D05237";


//drawing tool ---> circle created as mouse hovers
function Circle (x, y, radius){
  this.color = colorChoice;
  this.radius = radius;
  this.x = x;
  this.y = y;

  this.draw = function(){
    cdraw.beginPath();
    cdraw.arc(this.x, this.y,this.radius, 0 , Math.PI * 2, false);
    cdraw.fillStyle = this.color;
    cdraw.fill();
  }
}

var engage = function(e) {
  dragging = true;
  point(e);
}

var disengage = function(){
  dragging = false;
  //stop line connections
  cdraw.beginPath();
}

var point = function(event) {

  if(click == 1 && dragging){
    cdraw.lineTo(event.offsetX, event.offsetY);
    cdraw.stroke();
    new Circle(event.offsetX, event.offsetY, radius).draw();
    cdraw.beginPath();
    cdraw.moveTo(event.offsetX, event.offsetY);
  }
}

//setting width and height of the drawing canvas
drawingCanvas.width = 700;
drawingCanvas.height = 400;
// drawingCanvas.translate(500, 500);

//custom "while mouse is down" listener
drawingCanvas.addEventListener('mousedown', engage);
drawingCanvas.addEventListener('mouseup', disengage);

cdraw.lineWidth = 2*radius;
cdraw.strokeStyle = "#D05237";
//create circles when mouse is down
drawingCanvas.addEventListener('mousemove', point);


//clearing the canvas

document.getElementById("btn").onclick = function (){
  cdraw.clearRect(0,0,drawingCanvas.width, drawingCanvas.height);
};
