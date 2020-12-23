
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground,rec1,rec2,rec3, dustbinImage, rdustbin;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,100);
	ground= new Ground(400,690,800,60);
	rdustbin=new Dustbin(600,650,50,50);
	rec1  = new Dustbin(700,650,100,20);
	rec2 = new Dustbin(635,630,30,100);
	rec3 = new Dustbin(735,630,30,100);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  drawSprites();
  paper.display();
  ground.display();
  rdustbin.display();
  rec1.display();
  rec2.display();
  rec3.display();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}



