
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(10,100)
iron=new Iron(300,350)
plane=new Plane(600,height,1200,20)
stone=new Stone(700,320,100,100)
rubber=new Rubber(900,450,70)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  plane.display()
  hammer.display()
  iron.display()
  stone.display()
  rubber.display()
  drawSprites();
 
}



