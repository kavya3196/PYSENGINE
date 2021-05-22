const Engine=Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies

var engine,world;
var object;

var ground;
function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world = engine.world;


 var object_options={
   isStatic :false,
   restitution: 1.5
 }

  ball =Bodies.circle(200,100,20,object_options)
  World.add(world,ball)

  console.log(object)

  var ground_options={
    isStatic:true
  }
  ground =Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground)

}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}