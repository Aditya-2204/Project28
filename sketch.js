
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(800, 700);
	stone1 = new stone(100, 405, 50, 50);
	boy1 = new boy(100, 400);
	ground1 = new ground(400, 700, 800, 10);
	tree1 = new tree(600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  stone1.display();
  boy1.display();
  ground1.display();
  tree1.display();
  drawSprites();
 
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.body.position;
	stoneBodyPosition=lstone.body.position;

	var dist=tance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Mattr.Body.setStatic(lmango.body,false);
	}
}

