var speakcount = 0;

var haiku;



function Buddha(){

	this.y = 2*windowHeight;
	this.speed = 5;

	haiku = createElement('h2', '');

  	

	this.display = function(){

		imageMode(CENTER);
		image(stormbuddha, width/2, this.y, 346, 641);
		 


	}

	this.update = function(){



		if(this.y > height/2){
			this.y = this.y - this.speed;
		} else{
			speakcount = speakcount + 1;
			str = haikus[index].replace(/(?:\r\n|\r|\n)/g, '<br />');
			haiku.html(str);

		}


		if (speakcount === 1){
			responsiveVoice.speak(haikus[index], "US English Male", {pitch: 0, rate:0.5});
		}

	}

	this.remove = function(){
		speakcount = 0;
		haiku.html('');


		if(this.y < 2*windowHeight){
			this.y = this.y + this.speed;
		} else{
			newcrystal.display();
		}
	}


}