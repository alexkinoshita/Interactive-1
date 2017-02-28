var img;


function setup() {
	img = createImg("dog.jpg");
	createCanvas(windowWidth,windowHeight);
	backgorund(255);
	
}

function draw() {
	image(img,0,0);
	}