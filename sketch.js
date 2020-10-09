
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground,groundImage;
var grass,grassImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  grassImage = loadImage("grass.png");
}



function setup() {
  createCanvas(400, 400);
  score = 0;
  grass = createSprite(200,200,400,400);
  grass.addImage(grassImage);
  grass.x = grass.width/2;
  
  ground= createSprite(400,350,900,10);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  monkey = createSprite(70,310,10,10);
 monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.13;
  
  bananaGroup = createGroup();
  
}


function draw() {
background(180);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (grass.x < 0){
    grass.x = grass.width/2;
  }
  if(keyDown("space")){
   monkey.velocityY = -12; 
    }
  score = score + Math.round(getFrameRate()/60);
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  foods();
  obstacles();
 drawSprites(); 
  text ("Survival Time:"+score,300,40);
   text(mouseX+","+mouseY,mouseX,mouseY);
}
function foods(){
  if (frameCount % 80 === 0){
    var banana = createSprite(400,200,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 120;
    bananaGroup.add(banana) ;
  } 
  
 
}
function obstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(400,200,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale = 0.1;
    obstacle.y =Math.round(random(120,200));
    obstacle.lifetime = 120;
  } 
  
}




