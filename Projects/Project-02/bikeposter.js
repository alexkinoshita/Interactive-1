function setup(){

	createCanvas(600,600);
	background(0);
}

function draw(){

	 var x = 0;

	while( x <= width ){

		fill(0,0,random(0,255));
		ellipse(x, a,50,50);
		x = x+50;
		print (x);
	}

for (var a = 0; a <= width; a+=50){
	fill(a,a,a);
	ellipse(a,400,50,50);
}

}