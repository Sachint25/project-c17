
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,bin1,bin2,bin3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(200,200,70);
	
	bin4 = new bin(525,450);
	bin1 = new left(600,570,150,10);
	bin2 = new right(525,525,10,150);
	bin3 = new base(675,525,10,150);

	ground1 = new ground(400,600,800,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();

  ground1.display();

  paper1.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y: -85});
	}
}

