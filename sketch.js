var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rec1, rec2, rec3;
var paperObject;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rec1=createSprite(600,640,10,50);
	rec1.shapeColor=color("red");
	rec2=createSprite(700,640,10,50);
	rec2.shapeColor=color("red");
	rec3=createSprite(650,660,100,10);
	rec3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



