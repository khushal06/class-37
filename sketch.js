var trex ,trexA ,ground,cloud  ;

function preload (){
  trexA = loadAnimation ("trex1.png","trex3.png","trex4.png")
  groundA = loadImage ("ground2.png")
  cloudA  = loadImage ("cloud.png")
}
function setup() {
  createCanvas(600, 200);
  trex = createSprite(30,150,20,10)
  trex.addAnimation("trexrun",trexA)
  trex.scale = 0.4;
  //ground
  ground = createSprite(200,160,400,10)
  ground.addImage("groundrun",groundA)
  ground2 = createSprite(200,180,400,10) 
  //clouds
 
  
}

function draw() {
  background(0);
  ground.velocityX = -3;
  
 
  console.log(ground.x)
  trex.collide(ground2) 
  ground2.visible = false;
  if(ground.x <0 ){
     ground.x = 200;
  }
 
  spawnClouds();
  drawSprites();
}
  function spawnClouds()
{
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(600,100,40,10);
    cloud.y = random (80,120);
    cloud.addImage("cloudrun",cloudA)
    cloud.scale = 0.5;
    cloud.velocityX = -3;
}
}