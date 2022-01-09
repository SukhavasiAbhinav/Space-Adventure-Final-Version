class AlienShip {
    constructor(posX) {
     
      this.ry = height-random([220,420,620]); //setting the x posing where meteor will be created  
      this.rx = posX;   //setting y position where meteor will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("meteor",meteorAnimation);
      this.spt.scale=0.5;
      this.spt.velocityX=-2;
      //this.spt.velocityY=3;
    }
  
}
  

