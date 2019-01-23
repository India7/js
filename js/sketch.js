var g=0;
function setup() {
	createCanvas(displayWidth, displayHeight);
}
function draw() {
	background(255,0,0);
	stroke(240,200,200);
	quad(300,100,width/2,height/2,250,300,100,200);
	strokeWeight(10);
	point(100,200);
	strokeWeight(2);
	line(width/2,height/2,width,0);
	//rectMode(CENTER);
	rect(200,200,50,100);
	stroke(255,0,0);
	ellipse(200,200,100,50);
	triangle(200,0,400,0,300,100);
	arc(100,500,100,100,radians(45),radians(180) );
}