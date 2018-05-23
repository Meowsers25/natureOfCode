let w;

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();
}

function draw() {
	background(75);
	w.display();
	w.walk();
}

//random walker
function Walker() {
	//create vector 
	this.pos = createVector(width/2, height/2);
	//replaces
	// this.x = width/2;
	// this.y = height/2;

	this.walk = function(){
		//add vector object pos
		// this.pos.x = this.pos.x + random(-3, 3);
		// this.pos.y = this.pos.y + random(-3, 3); 
		this.vel = createVector(random(-5, 5), random(-5, 5));
		this.pos = this.pos.add(this.vel);
	}

	this.display = function() {
		fill(255);
		//need to add pos
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}