
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paperSprite,paperIMG,DustbinIMG;

function preload()
{
   DustbinIMG = loadImage("Dustbin image.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  
	Bottom_Box = Bodies.rectangle(1400,427,100,200,{isStatic:true});
  World.add(world,Bottom_Box);
  

    ground = new Ground(800,690,1600,20);
    paperSprite = new Paper(200,200,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperSprite.display();
  ground.display();
  image(DustbinIMG,Bottom_Box.position.x,Bottom_Box.position.y,200,250);
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:500,y:-500})
  }
}