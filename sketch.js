const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground; 
var paper;
var base;
var leftside;
var rightside;

function preload(){

  

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
        ground = new Ground(10,690,1600,20);
		    paper = new Paper(50,100,70);
        base = new Log(500,670,150,20,PI);
        leftside = new Log(420,645,20,70,PI);
        rightside = new Log(565,645,20,70,PI);

     
    Engine.run(engine);
  
}


function draw() {
background(0);
  
  ground.display();
  paper.display();
  base.display();
  leftside.display();
  rightside.display();
  drawSprites();
 
}
function keyPressed(){

  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-12})
  }
}