
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob;
var roof;
var line;
var engine;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(600,200,500,30);
	bob1 = new Bob(560,300,20);
	bob2 = new Bob(580,300,20);
	bob3 = new Bob(600,300,20);
	bob4 = new Bob(620,300,20);
	bob5= new Bob(640,300,20)
	rope1 = new Rope(roof1.body,bob1.body,-40,-400);
	rope2 = new Rope(roof1.body,bob2.body,-20,-400);
	rope3 = new Rope(roof1.body,bob3.body,0,-400);
	rope4 = new Rope(roof1.body,bob4.body,20,-400);
	rope5 = new Rope(roof1.body,bob5.body,40,-400)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  Engine.update(engine);
  
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20})
	}
}




