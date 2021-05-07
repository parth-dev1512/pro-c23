var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLeft,boxRight,BoxDown;
var engine, world

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	engine = Engine.create();
	world= engine.world;
	
	createCanvas(800, 700);
	rectMode(CENTER);
	

	/*packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	*/
	//packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	packageBody = Bodies.rectangle(width/2,200,10,10);
	World.add(world,packageBody)
	
	boxLeft = Bodies.rectangle(width/2-90,580,20,100,{ isStatic:true })
	World.add(world,boxLeft)

	boxRight = Bodies.rectangle(width/2+90,580,20,100,{ isStatic:true })
	World.add(world,boxRight)

	boxDown = Bodies.rectangle(width/2,635,200,20,{ isStatic:true })
	World.add(world,boxDown)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


//	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  
	
  
  
  
  fill("red")
 
  rect(boxLeft.position.x,boxLeft.position.y,20,100)
  rect(boxRight.position.x,boxRight.position.y,20,100)
  rect(boxDown.position.x,boxDown.position.y,200,20);

  imageMode(CENTER);
  image(packageIMG, packageBody.position.x,packageBody.position.y,50,50);

  fill("yellow")
  rect(ground.position.x,ground.position.y,width,10)

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody, false);
  }
}



