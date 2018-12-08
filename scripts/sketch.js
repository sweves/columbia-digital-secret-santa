var strawberries = [];
var sky = [];
var numStrawberries =300;
var newbuddha;
var index = Math.floor((Math.random() * haikus.length) );

var numStars = 50;
var mainscreen = true;
var dragtime = 0;


function preload(){
	berry = loadImage('img/strawberry.png');
	stormbuddha = loadImage('img/stormbuddha.png');
	crystal = loadImage('img/crystal.png');
	newbuddha = new Buddha();
	newcrystal = new Crystal(windowWidth/2, windowHeight/2);

}

function setup(){
	var canvas = createCanvas(windowWidth, windowHeight);

	for (var i = 0; i <= numStars; i++){

      	sky.push(new Star(random(0, width), random(0, height)));
  	}


	
}
	
function draw(){

	background(0);

	strawberryRain();

	for(var i=0; i<sky.length; i++){

		sky[i].update();
		sky[i].show();

	}

	for (var i = sky.length-1; i >= 0; i--) {
    	var astar = sky[i];
	    if (astar.deadStar()) {
	      sky.splice(i, 1);
	    }
  	}

  	if(sky.length <= numStars){
    sky.push(new Star(random(0, width), random(0, height)));
  }

  if(mainscreen){
  	newcrystal.display();
  }
  

}

function mouseDragged() {

	dragtime = dragtime + 1;



		if(strawberries.length == 0 && dragtime > 100){
			mainscreen = false;
			index = Math.floor((Math.random() * haikus.length) );
			for(var i = 0; i<numStrawberries; i++){
				strawberries.push(new Strawberry());
			}
		}	
	

}

function mouseReleased(){
	dragtime = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


