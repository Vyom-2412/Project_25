class Paper
{
   constructor(x,y)
   {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2,
      }
      this.body = Matter.Bodies.circle(x,y,65,options);
      this.radius = 65;
      this.paperIMG = loadImage("paper image.png");
      World.add(world,this.body);
   }
   display()
   {
      push();
      translate(this.body.position.x,this.body.position.y);
      imageMode(CENTER);
      image(this.paperIMG,0,0,this.radius,this.radius);
      pop();
   }
}