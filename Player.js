class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("astro",astroAnimation);
		this.spt.scale=0.6;
		//this.spt.debug=true;
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+1;
	}

	moveLeft()
	{ 
		this.spt.x=this.spt.x-12;
	}

	moveRight()
	{ 
		this.spt.x=this.spt.x+12;
	}

	jump()
	{ 
		this.spt.velocityY=-21;
    }
	
}




















