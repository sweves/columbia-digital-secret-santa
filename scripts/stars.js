function Star(_x, _y) {

	this.x = _x;
	this.y = _y;
	this.staropacity = random(1, 100);
	this.size = random(2,5);
	this.fade = 0.5;
	this.sparkleornot = random(0,3);

	this.show = function(){
		if (this.staropacity >= 90) {
	      if (this.sparkleornot>=2) {     
	        stroke(100);
	        strokeWeight(2);
	        line(this.x-5, this.y, this.x+5, this.y);
	        line(this.x, this.y-5, this.x, this.y+5);
	        noStroke();
	        fill(0);
	        ellipse(this.x, this.y, 5, 5);
	      } else {
	        noStroke();
	        fill(255, this.staropacity);
	        ellipse(this.x, this.y, this.size, this.size);
	      }
	    } else {
	      noStroke();
	      fill(255, this.staropacity);
	      ellipse(this.x, this.y, this.size, this.size);
	    }
	}

	this.update = function(){
		this.staropacity += this.fade;
	    if (this.staropacity >= 100) {
	      this.fade*=-1;
	    }
	}

	this.deadStar = function(){
		if (this.staropacity <= 0) {
	      return true;
	    } else {
	      return false;
	    }
	}

}