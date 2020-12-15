
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground;
var paper;

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground = new Ground(600,height,1400,20)

	dustbin1 = new Dustbin(730,670,20,PI/2);
	paper = new Paper(320,670,20,PI/7);
	

	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 dustbin1.display();
 ground.display();
 paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	   
	}
   }
   
