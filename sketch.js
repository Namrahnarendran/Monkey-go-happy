
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,ground;
var bananaGroup, obstacleGroup;
var score;

function preload(){  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,500);  

monkey =createSprite(100,340,10,10);
monkey.addAnimation("monkey",monkey_running);
monkey.scale = 0.2;
  
ground = createSprite(300,400,600,10);
ground.x =ground.width/2;

  bananaGroup =createGroup();
  obstacleGroup =createGroup();
  
  score =0;
}


function draw() {
background("white");
 
  monkey.collide(ground);
  
  if(keyDown("space")) {
  monkey.velocityY = -13;  
  }
 monkey.velocityY = monkey.velocityY +0.8;
 
 bananaGroup.setLifetimeEach = 300;
 obstacleGroup.setLifetimeEach = 300;
  
  stroke("lightblue");
  textSize(20);
  fill("lightblue");
  score =score + Math.round(getFrameRate()/60);
  text("Survival Time:" + score,100,50);
  
banana();
obstacle();
drawSprites();  
}

function banana(){
  if(frameCount %70 ===0){
 var banana = createSprite(400,200,10,10);
  banana.y = Math.round(random(150,300))
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5  
  bananaGroup.add(banana);
  }
}

function obstacle() {
  
 if(frameCount %80 ===0){
var obstacle =createSprite(300,360,10,10);
  obstacle.x =Math.round(random(500,600))
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -8;
  obstacleGroup.add(obstacle)
 }
}


