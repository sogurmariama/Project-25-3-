
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ball,wall1,wall2,wall3,ground,dustbin,dustbinimage

function preload()
{
	dustbinimage=loadImage("Sprites25/dustbingreen.png")
	
}

function setup() {
	createCanvas(1500, 700);

	dustbin=createSprite(1400,585);
	dustbin.addImage(dustbinimage);
	dustbin.scale=0.5;
	engine = Engine.create();
	world = engine.world;

	ball=new paper(100,500);
	ball.scale=1	//Create the Bodies Here.
	wall1=new floor(1330,610,10,130);
	wall2=new floor(1470,610,10,130);
	//wall3=new trashbin(1265,590,20,120);
	ground=new floor(750,680,1500,30);
	//dustbin= new trashbin(900,520,150,150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ball.display();
  wall1.display();
  wall2.display();
  //wall3.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-300});
	}
}



