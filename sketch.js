var path
var pathImg
var boy
var running_boy
var left_wall,right_wall

function preload(){
  //pre-load images
  running_boy = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  left_wall=createSprite(10,200,20,400);
  right_wall=createSprite(380,200,20,400);
  edges = createEdgeSprites();

  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale=1.2;
  boy=createSprite(200,370,50,50);
  boy.addAnimation("running", running_boy);
  boy.scale = 0.05;
}

function draw() {
  background("white");

  console.log(path.y)
  if (path.y > 400 ){
    path.y = height/2;
  }

  boy.x=mouseX
  boy.collide(left_wall)
  boy.collide(right_wall)

  drawSprites();
}
