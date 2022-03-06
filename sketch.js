var box;


function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,25,25);
  box.shapeColor="red";
}

function draw() 
{
  background(0);
  if (keyIsDown(RIGHT_ARROW)) {
      box.x+=5;
  } else if (keyIsDown(LEFT_ARROW)) {
    box.x-=5;
  }

  if (keyDown("space")) {
    background("white");
  } else {
    background("purple"); 
  }
  drawSprites();
}




