var player , playerImage;
var ground , groundImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6 , obstacleImage;
var gameOver , gameOverImage;

function preload(){
  playerImage = loadAnimation("mario1.png" , "mario2.png" , "mario3.png")
  groundImage = loadImage("ground + copy.png");
  obstacle1Image = loadImage("Obstacle.png");

  gameOverImage = loadImage("gameOver.png");
}

function setup() {
  createCanvas(600,300);
  player =  createSprite(50, 210, 20, 50);
  player.addAnimation("running" , playerImage);
  player.scale = 0.03;

  ground = createSprite(200 , 280 ,600 , 10);
  ground.addImage(groundImage);
 // ground.scale = 0.2 ;
  ground.velocityX = -2;

  obstaclesGroup = new Group();
}

function draw() {
  background("blue");
  if(ground.x < 0){
    ground.x = 200;
  }
  if(keyDown("UP_ARROW")){
    player.velocityX = -2;
  }
  if(obstaclesGroup.isTouching(player)){
    player.setVelocity(0);
    
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
   obstacle.addImage(obstacleImage);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle1);
              break;
      case 3: obstacle.addImage(obstacle1);
              break;
      case 4: obstacle.addImage(obstacle1);
              break;
      case 5: obstacle.addImage(obstacle1);
              break;
      case 6: obstacle.addImage(obstacle1);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}