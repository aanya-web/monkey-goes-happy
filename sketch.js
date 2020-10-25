
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var score;
var binvisibleGround,ground;
var survivalTime;
var score;
var PLAY = 1;
var END = 0;
var gameState;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  
  
  monkey = createSprite(50,400);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,480,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  
  invisibleGround = createSprite(250,480,600,10);
  invisibleGround.visible = false;
  
  
   obstaclesGroup =  new Group();
   bananaGroup = new Group();
    score = 0;
  survivalTime = 0;
}


function draw() {
background("white")
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime :"+survivalTime,250,50);
  
 if (ground.x < 0){
          ground.x = ground.width/2;
        }
  
     if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    
  }
  if(gameState === PLAY)
    {
      if(obsatclesGroup.isTouching(monkey))
        {
          obstaclesGroup.destroy();
        }
    }
  
  if(gameState===END)
    {
      
    }
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  bananas();
  obstacles();
  drawSprites();
}

function obstacles()
{
  {
  if (frameCount % 200 === 0) {
    obs = createSprite(500,430,40,10);
    //obs.y = Math.round(random(500,20));
    obs.addImage(obstaceImage);
    obs.scale = 0.3;
    obs.velocityX = -3;
    obs.lifetime = 250;
    obstaclesGroup.add(obs);
    
}
}
}
function bananas()
{
  if (frameCount % 80 === 0) {
    banana = createSprite(500,120,40,10);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
    
}

}

