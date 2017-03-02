var x = 400;
var y = 300;
var xspeed = 2;
var yspeed = 2;


function setup(){

	createCanvas(600,600);


}


function draw (){
	noStroke();
	fill(255,0,0);
	triangle(x, y-50, x-50, y+50, x+50);


}



