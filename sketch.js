const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world

function setup() {
  createCanvas(1000,500);

	engine = Engine.create();
	world = engine.world;
  
  striker = new Striker(100,300,25,25)
  ground = new Ground(560,330,300,30)
  block1 = new Block(500,300)
  block2 = new Block(530,300)
  block3 = new Block(560,300)
  block4 = new Block(590,300)
  block5 = new Block(620,300)
  block6 = new Block(515,270)
  block7 = new Block(545,270)
  block8 = new Block(575,270)
  block9 = new Block(605,270)
  block10 = new Block(530,240)
  block11 = new Block(560,240)
  block12 = new Block(590,240)
  block13 = new Block(545,210)
  block14 = new Block(575,210)
  block15 = new Block(560,180)
  sling = new Projectile(striker.body,{x:100,y:300})

  Engine.run(engine);
}

function draw() {
  
  background(255,255,0);  
  striker.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  sling.display();
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
  sling.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    sling.attach(striker.body);
   
    Matter.Body.setPosition(striker.body, {x: 100 , y: 300});
  }
}