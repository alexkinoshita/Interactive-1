var fs = 10;


function setup() {
	frameRate(fs);
	createCanvas(windowWidth,windowHeight);
	
}

function draw() {
	background(0,0,255);
	fill(random(0,255), random(0,255), random(0,255));
	ellipse(random(0,1000),random(0,1000), 50,50);
}
