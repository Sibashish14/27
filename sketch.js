
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var treeObj, stone;
var groundObject, slingShot,engine;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(235,420,30,30);
    slingShot = new Sling(stone.body,{x:200,y:400});
	
	
}

function draw() {

  background(230);
  Engine.update(engine);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  groundObject.display();
  stone.display();
  slingShot.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{ x : mouseX , y : mouseY });
}
function mouseReleased(){
	slingShot.fly();
}
 