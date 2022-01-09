var astro;
var platformGroup, platform1Group;
var astroAnimation, meteorAnimation, wallAnimation, groundAnimation;
var homeSpaceship;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;
var alienShip,spaceship_Img
var alienShipGroup;
function preload()
{
  astroAnimation=loadAnimation("images/Astro 1.png","images/Astro 2.png","images/Astro 3.png");
  meteorAnimation=loadAnimation("images/meteor1.png");
  wallAnimation=loadAnimation("images/wall.png");
  groundAnimation=loadAnimation("images/Surface1.jpg");  
  flagAnimation=loadAnimation("images/finalSpaceship.png");
  spaceship_Img=loadAnimation("images/T1.png");
  meteorAnimation=loadAnimation("images/alienShip.png");

}

function setup() {
  //Creating canvas equal to width and height of display
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;
  
  //creating a player astro
  astro = new Player();
  
  //creating a group
  platformGroup= createGroup();
  platform1Group=createGroup();
  alienShipGroup=createGroup();

  //adding platforms to stand for astro
  for (var i=0;i<26;i++)
	 {
     frameRate(30);
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);//Adding each new platform to platformGroup
      gap=random([5,10,50,100,200]);//givin randome value to gap
      countDistanceX = countDistanceX + platform.spt.width + gap; //counting x location of next platform to be build
      //adding wall to the game
      if(i%3===0)
      {
        platform1=new Platform1(countDistanceX);
        platform1Group.add(platform1.spt);
      }
      //adding meteors to the game
      if(frameCount%50===0)
      {
      alienShip=new AlienShip(countDistanceX);
      alienShipGroup.add(alienShip.spt);
    
      }  
  }
  homeSpaceship=createSprite(countDistanceX-150,height-200);
  homeSpaceship.addAnimation("flagimg",flagAnimation);
  homeSpaceship.scale=0.5;
  homeSpaceship.setCollider("rectangle",0,0,500,700);
  //homeSpaceship.debug = true;
}

function draw() {
  background(rgb(9,18,45));
  fill("white");
  text(mouseX + ","+ mouseY,50,200);
  console.log(astro.velocityX);
  console.log(astro.velocityY);

  
      
  //code to move the camera
  translate(  -astro.spt.x + width/2 , 0);
 // translate()
  if(gameState==PLAY)//Play state
  {  
       //changing the game states
       if(alienShipGroup.isTouching(astro.spt) || astro.spt.y>height)
       {  
         gameState=LOSE;
       } 
    
       if(homeSpaceship.isTouching(astro.spt))
       {
          gameState=WIN;
       }
       //apply gravity to astro and set colliding with platforms
        astro.applyGravity();
        astro.spt.collide(platformGroup);
        astro.spt.collide(platform1Group);

        //if(spaceshipGroup.isTouching(astro))
        //{
        //    astro.spt.collide(spaceshipGroup);
       // }
        
        //Calling various function to controll astro
        if (keyDown("left"))  
        { 
          astro.moveLeft();
        }
        if (keyDown("right")) 
        { 
          astro.moveRight();
        }
        if (keyDown("up") && astro.spt.velocityY===0) 
        {
          astro.jump();
        }


   }

  if(gameState==LOSE)//END State
  {  
    stroke("red");
    fill("red");
    textSize(40);
    text("GAME OVER",astro.spt.x,300);
    alienShipGroup.destroyEach();
    astro.spt.setVelocity(0,0);
    astro.spt.pause();
    
  }

  if(gameState==WIN)//WIN state
  {  
    stroke("green");
    fill("green");
    textSize(40);
    text("Winner",astro.spt.x,300);
    alienShipGroup.destroyEach();
    astro.spt.setVelocity(0,0);
    astro.spt.pause();
  }
  

   drawSprites();
}



