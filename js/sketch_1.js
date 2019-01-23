var g=90;
var check=false;
var un=1;
function setup() {
	createCanvas(197,152);
	//noStroke();
}
function draw() {
	g=g+un;
	if(g==0){
		check=false;
	}
	if(g==90){
		check=true;
	}
	if(check==false){
		un=1;
	}else{
		un=-1;
	}
	background (249,178,51);
	for(var posx=0; posx<width; posx=posx+20){
		for(var posy=0; posy<height; posy=posy+20){
				push();
				translate(posx,posy);
					noStroke();
					fill(47,172,102);
					ellipse(4,4,3,3);
					//
					fill(163,25,91);
					quad(15, 6, 18, 6, 18, 13, 11, 13);
				    //
				    push();
				    	rotate(radians(g));
						stroke(0);
						noFill();
						curve(60, 9, 15, 0, 0, 15, -60, 9);
					pop();
				pop();
		}
	}
			    
}