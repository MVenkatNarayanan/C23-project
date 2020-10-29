var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true,friction:0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 
	 
	boxleft = Bodies.rectangle(300, 600, 20, 100 , {isStatic:true} );
	 World.add(world, boxleft);

	 boxbottom = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	 World.add(world, boxbottom);

	 boxright = Bodies.rectangle(500, 600, 20, 100 , {isStatic:true} );
	 World.add(world, boxright);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	Engine.update(engine);
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,width,10);

	fill("red");
	rectMode(CENTER);
	rect(boxleft.position.x,boxleft.position.y,20,100);


	rectMode(CENTER);
	rect(boxbottom.position.x,boxbottom.position.y,200,20);

	rectMode(CENTER);
	rect(boxright.position.x,boxright.position.y,20,100);



  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

	ellipseMode(RADIUS);
	ellipse(packageBody.position.x,packageBody.position.y,10,10);

  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 10,30);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);

  }
}



