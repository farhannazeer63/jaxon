var path,pathImg
var runner,runnerImg
function preload(){
  //pre-load images
pathImg.loadImage("path.png");
runnerImg.loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velovityY=4;
  path.scale=1.2;
  runner = createSprite(200,200);
  runner.addAnimation(runnerImg);
  runner.velovityY=3;
console.log()
}

function draw() {
  background(0);

if(path.y > 400 ){
  path.y = height/2
}

  drawSprites()

}
