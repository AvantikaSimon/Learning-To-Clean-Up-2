class wastePaperBasket {
  constructor(x, y, width, height){
 var options = {
   isStatic:true
}
this.body = Bodies.rectangle(this.x, this.y, width, height, options);
//this.width = 20;
//this.height = 200;

World.add(world, this.body);
}
display() {  
rectMode(CENTER);
strokeWeight()
stroke("blue");
rect(this.body.position.x, this.body.position.y, this.width, this.height);
this.body.display();
  }
}
