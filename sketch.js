const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var myWorld, myEngine, ground, box1, box2;

function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground()

  box1 = new Box(150,200,50,50);
  box2 = new Box(170,100,80,100);

  
}

function draw() {
  background(0);  

  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
 
  console.log(box2.body.angle)

}