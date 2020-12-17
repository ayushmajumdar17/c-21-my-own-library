var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;

  gameob1=createSprite(300,100,40,60);
  gameob1.shapeColor="yellow";
  gameob1.debug=true;

}

function draw() {
  background(255,255,255); 
  //  movingRect.x=mouseX
  //  movingRect.y = mouseY;
  //  if(isTouchingg(movingRect,gameob1))
  //  {
  // gameob1.shapeColor = "red";
  // movingRect.shapeColor = "red";
  //  }
  //  else
  //  {
  //  gameob1.shapeColor = "green";
  //  movingRect.shapeColor = "green";
  //  }
  //if(ball.isTouching(topEdge))
  bounceOfff(movingRect,fixedRect);

    drawSprites();
}
