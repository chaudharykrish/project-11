var path;
var pathImg;

var runer;
var runnerImg;



function preload(){
  //pre-load images

pathImg = loadImage("path.png");

runnerImg = loadAnimation("runner-1.png","runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(330,330,50,50);
  runner.addAnimation("runner",runnerImg);
  runner.scale = 0.1





}

function draw() {
  background(0);


  drawSprites();

}
