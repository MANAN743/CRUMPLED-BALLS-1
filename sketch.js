
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	lowerSprite=createSprite(width-200,height-50,200,20);
	leftSprite=createSprite(width-300,height-100,20,100);
	rightSprite=createSprite(width-100,height-100,20,100);

  leftSprite.shapeColor=("red")
  lowerSprite.shapeColor=("red")
  rightSprite.shapeColor=("red")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);
	var options={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paperObject=Bodies.circle(120,100,40,options)
	World.add(world, paperObject);
   var rect_options={
	   isStatic:true
   }
	LowerRect=Bodies.rectangle(width-200,height-50,200,20,rect_options)
	World.add(world, LowerRect);
	leftRect=Bodies.rectangle(width-300,height-100,20,100,rect_options)
	World.add(world, leftRect);
	rightRect=Bodies.rectangle(width-100,height-100,20,100,rect_options)
	World.add(world, rightRect);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background(0);
 ellipseMode(RADIUS)
 ellipse(paperObject.position.x,paperObject.position.y,40,40)
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject,paperObject.position,{x:400,y:-400});
	}
}



