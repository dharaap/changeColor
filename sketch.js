var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,50,50)
  fixedRect.shapeColor= "red";
  movingRect=createSprite(200,200,50,50)
  movingRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  drawSprites();
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="blue"
  }
  else{
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }

}