//Color options stored in an array
var colors = [
  '#FFFFFF',
  '#84DCC6',
  '#A5FFD6',
  '#FFA69E',
  '#FF686B',
]

var blurArr = [ 0, 10, 20, 30];

var pickColor = function(){
  return  colors[Math.floor(Math.random()*colors.length)];
}

//Constructor for circle object
function Circle(x,y,radius,color){
  this.x = x;
  this.y = y;
  // this.x = Math.floor(Math.random()*window.innerWidth);
  // this.y = Math.floor(Math.random()*window.innerWidth);
  // this.dx = dx;
  // this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.blur = 30;

  this.reappear = function () {

    // //change x and y coordinates
    // this.x = Math.floor(Math.random()*window.innerWidth);
    // this.y = Math.floor(Math.random()*window.innerHeight);

    //change color
    this.color = pickColor();
    this.blur = blurArr[Math.floor(Math.random()*blurArr.length)];
    this.draw();
  }

  this.draw = function(){
    c.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise)
    c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false )
    c.fillStyle = this.color;
    c.shadowBlur = 30;
    c.shadowColor = "white";
    c.fill();
  }

  this.move = function() {
  while (this.x - this.radius < window.innerWidth){
      this.x += 0.5;
      this.draw();
    }
  }

}
