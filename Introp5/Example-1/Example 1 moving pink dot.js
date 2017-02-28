var x=0;
var y=0;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	background(0,0,255);
	fill("pink");
	ellipse(x,y,50,50); 
	x = x+10;
	if (x > width){
		x=0;
		y = y+50
	}
  console.log(x);
  console.log(y);
}