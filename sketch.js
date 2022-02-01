const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var  ground
var rope
var fruit
var fruitcon
var melon,rabbit,bgImg
var bunny
var button


let engine;
let world;

function preload()
{
  melon=loadImage("melon.png")
  rabbit=loadImage("rabbit.png")
  bgImg=loadImage("background.png")
}

function setup() 
{

  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  bunny= createSprite(250,650,100,100)
  bunny.addImage(rabbit)
  bunny.scale=0.2
  ground=new Ground(200,690,600,20)
  rope=new Rope(6,{x:245,y:30})
  var fruitoptions={
    restitution:0.1,density:0.001
  }
  fruit=Bodies.circle(300,300,15,fruitoptions)
  Matter.Composite.add(rope.body,fruit)
  fruitcon=new Link(rope,fruit)
 
  rectMode(CENTER); 
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)
  button=createImg("cut_button.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)
}

function draw() 
{
  background(51);
  image(bgImg,width/2,height/2,500,700)
  Engine.update(engine);
  ground.display()
  rope.show()
 image(melon,fruit.position.x,fruit.position.y,60,60)
   drawSprites()
}

function drop(){
  rope.break()
  fruitcon.detach()
  fruitcon=null
}




