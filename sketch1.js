var paperBall1
var wastePaperBasket1, wastePaperBasket2, wastePaperBasket3
var ground
var side1, side2, side3, side4

function setup() {
createCanvas(800, 400);
paperBall1 = createSprite(100, 380, 20, 20);
paperBall1.shapeColor = "white";

wastePaperBasket1 = createSprite(500, 300, 20, 290);
wastePaperBasket1.shapeColor = "orangered";
wastePaperBasket2 = createSprite(710, 300, 20, 290);
wastePaperBasket2.shapeColor = "orangered";
wastePaperBasket3 = createSprite(600, 180, 200, 10);
wastePaperBasket3.shapeColor = "orangered";

ground = createSprite(400, 395, 850, 10);

side1 = createSprite(1, 400, 1, 400);
side1.visible = false;
side2 = createSprite(800, 400, 1, 800);
side2.visible = false;
side3 = createSprite(1, 1, 400, 1);
side3.visible = false;

}

function draw() {
background("black");

paperBall1._collideWith(ground);
paperBall1.bounceOff(side1);
paperBall1.bounceOff(side2);
paperBall1.bounceOff(side3);
paperBall1.bounceOff(side4);
paperBall1.bounceOff(wastePaperBasket1);
paperBall1.bounceOff(wastePaperBasket2);
paperBall1.bounceOff(wastePaperBasket3);

if(keyDown("UP_ARROW")) {
     paperBall1.velocityY = -2;
     paperBall1.velocityX = 0;
}

if(keyDown("DOWN_ARROW")) {
    paperBall1.velocityY = 2;
    paperBall1.velocityX = 0;
}

if(keyDown("LEFT_ARROW")) {
   paperBall1.velocityX = -2;
   paperBall1.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")) {
    paperBall1.velocityX = 2;
    paperBall1.velocityY = 0;
}

text("Put the paper ball in the dustbin", 350, 150);

 drawSprites();

} 

if(keyDown("UP_ARROW")) {
    Matter.Body.setVelocityY(paperBall1, -2);
    Matter.Body.setVelocityX(paperBall1, 0);
    }

if(keyDown("DOWN_ARROW")) {
    Matter.Body.setVelocityY(paperBall1, 2);
    Matter.Body.setVelocityX(paperBall1, 0);
    }
  
if(keyDown("LEFT_ARROW")) {
    Matter.Body.setVelocityY(paperBall1, 0);
    Matter.Body.setVelocityX(paperBall1, -2);
    }
 
    if(keyDown("RIGHT_ARROW")) {
        Matter.Body.setVelocityY(paperBall1, 0);
        Matter.Body.setVelocityX(paperBall1, 2);
        }