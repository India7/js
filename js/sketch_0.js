var r;
function setup() {
	createCanvas(displayWidth, displayHeight);
}
function draw() {
	r=random(5,200);
	posx=random(width);
	var colors=[color(154,232,245),color(247,180,45),color(228,74,200)];
	strokeWeight(r);
	console.log(colors.length);
	/*stroke(colors[int(random(3))]);*/
	if(posx>0 & posx<width/3){
		stroke(colors[0]);
	}else if(posx<width/3 & posx<width/3){
		stroke(colors[1]);
	}else{
		stroke(colors[2]);
	}
	point(random(width),random(height));
}