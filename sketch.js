 const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;

var engine,world;
var ground;

var box1
var box2


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  
  ground=new Ground(200,390,400,20);
  box1=new Box(240,300,50,50);
 box2=new Box(200,100,50,100);
 

}
function draw() {
  background("blue");  
  Engine.update(engine);
 ground.display();
box1.display();
box2.display();

}