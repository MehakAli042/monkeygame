
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var obstacle, ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  ObstacleGroup = new Group();
}



function setup() {
  
   createCanvas(600,400);
   background("green");
  
  monkey = createSprite(100,200,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(300,350,1000,10);
  ground.shapeColor = "brown"
  ground.velocityX = -2;
  

}


function draw() {
  background("green");
  drawSprites();
  score = score+1;
  textSize(20)
  text("survival time:"+score, 290, 20)
  stroke("brown");
  
  
  
  Obstacle();
  Banana();
  
  if(ground.x < 0){
    ground.x = 400;
  }

  
  if(keyDown("SPACE")){
    monkey.velocityY = -2;
  }
  
  monkey.velocityY+=0.5;
  monkey.collide(ground);
}

function Obstacle(){
  
  if(frameCount%300===0){
  obstacle = createSprite(400,Math.round(random(200,350)),30,30);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -2;
  ObstacleGroup.add(obstacle);
}
}

function Banana(){
  
  if(frameCount%80===0){
  banana = createSprite(400,Math.round(random(200,350)),30,30);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -2;
  FoodGroup.add(banana);
}
}
  







