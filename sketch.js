const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var wastePaperBasket1, wastePaperBasket2, wastePaperBasket3
var ground
var side1, side2, side3, side4

function setup() {
createCanvas(800, 400);
paperBall1 = new paperBall(100, 380, 20, 20);

wastePaperBasket1 = new wastePaperBasket(500, 300, 20, 290);
wastePaperBasket2 = new wastePaperBasket(710, 300, 20, 290);
wastePaperBasket3 = new wastePaperBasket(600, 180, 200, 10);

ground = Bodies.rectangle(400, 395, 850, 10, ground_options);
var ground_options = {
    isStatic:true
}

side1 = Bodies.rectangle(1, 400, 1, 400);
side1.visible = false;
side2 = Bodies.rectangle(800, 400, 1, 800);
side2.visible = false;
side3 = Bodies.rectangle(1, 1, 400, 1);
side3.visible = false;

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

}

function draw() {
background("white");
paperBall1.display();
wastePaperBasket1.display();
wastePaperBasket2.display();
wastePaperBasket3.display();
side1.display();
side2.display();
side3.display();

}
