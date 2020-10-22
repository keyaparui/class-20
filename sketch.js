var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.debug = true;
  fixedRect.shapeColor = "green"
  movingRect = createSprite(400,200,80,30);
  movingRect.debug = true;
  movingRect.shapeColor = "green"
}

function draw() {

  background(0); 
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "Red"

  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"
  }

  drawSprites();
}