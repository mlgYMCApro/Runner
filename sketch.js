var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var obstacle, obstacleImage;
var coin, coinImage;
var energyDrink, energyDrinkImage;
var power, powerImage;
var obstacleGroup, coinGroup;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  obstacleImage = loadAnimation("Bomb1.png", "Bomb2.png", "bomb.png");
  coinImage = loadAnimation("coin.png");
}

function setup(){
  
  createCanvas(400,800);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,740,30,30);
boy.addAnimation("JakeRunning",boyImg);
boy.scale = 0.8;
  obstacleGroup = createGroup();
  coinGroup = createGroup();  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  // if(coin.isTouching(boy)){
  //   coin.destroy();
  // }
  
  if(obstacleGroup.isTouching(boy)){
    obstacleGroup.destroyEach();
  }
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  spawnCoins();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%100 === 0){
    obstacle = createSprite(Math.round(random(40, 370)), -50);
    obstacle.velocityY = 5;
    obstacle.addAnimation("Bomb", obstacleImage);
    obstacle.scale = 0.09;
    obstacleGroup.add(obstacle);
    obstacle.setLifetime = 200;
  }
 

}

function spawnCoins(){
  if(frameCount%50 === 0){
    coin = createSprite(Math.round(random(40, 370)), -50);
    coin.velocityY = 7;
    coin.addAnimation("Coin", coinImage);
    coin.scale = 0.5;
    // coinGroup.add(coin);
    coin.setLifetime = 200;
  }
 

}