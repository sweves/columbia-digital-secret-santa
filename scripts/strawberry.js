

function strawberryRain(){
	for(var i=0; i<strawberries.length; i++){
		if(i == 0){
			newbuddha.update();
			newbuddha.display();
		} 

		strawberries[i].update();
		strawberries[i].display();

	}

	for (var i = this.strawberries.length-1; i >= 0; i--) {
    	var s = this.strawberries[i];
	    if (s.offScreen()) {
	      this.strawberries.splice(i, 1);
	    }
  	}

  	if(strawberries.length ==0){
		newbuddha.remove();
		newbuddha.display();
	}

}

function Strawberry() {

			this.x = random(0, width);
			this.y = random(-(4*height), -30);
			this.yspeed = 5;
			this.xspeed = random(-1, 1);
			this.origin = this.x;

			this.choose = random(0, 3);

			if(this.choose<1){
				this.w = 20;
				this.h = 27;						
			} else if(this.choose>1 && this.choose <2){
				this.w = 30;
				this.h = 40;
			} else{
				this.w = 40;
				this.h = 50;
			}

			this.display = function(){
				
				image(berry, this.x, this.y, this.w, this.h);
				
			},

			this.update = function(){
				this.y = this.y + this.yspeed;
				this.x = this.x + this.xspeed;

				if(this.x > this.origin + 10 || this.x < this.origin - 10){
					this.xspeed = this.xspeed * -1;
				}

			}

			this.offScreen = function(){
				if(this.y>height){
					return true;
				} else{
					return false;
				}

			}			
		}