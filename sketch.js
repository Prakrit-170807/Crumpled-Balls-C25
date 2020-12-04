const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball


function setup() {
	createCanvas(1536,710);


	engine = Engine.create();
	world = engine.world;

	var boxXpos=width/1.3,boxYpos=635;

	// boxleftSprite=createSprite(boxXpos-50, boxYpos-45, 10,100 );
 	// boxleftSprite.shapeColor=color("#69757F");
     boxLeftBody = Bodies.rectangle(boxXpos-50, boxYpos-45, 20,100 , {isStatic:true}, {restitution:0});
	 World.add(world, boxLeftBody);
 	// boxBase=createSprite(boxXpos, boxYpos, 100,10);
 	// boxBase.shapeColor=color("#69757F");
 	 boxBottomBody = Bodies.rectangle(boxXpos, boxYpos, 100,20 , {isStatic:true} , {restitution:0});
 	 World.add(world, boxBottomBody);
 	// boxrightSprite=createSprite(boxXpos+50 , boxYpos-45, 10,100);
 	// boxrightSprite.shapeColor=color("#69757F");
 	 boxRightBody = Bodies.rectangle(boxXpos+50 , boxYpos-45, 20,100 , {isStatic:true} , {restitution:0});
	 World.add(world, boxRightBody);


	dustbin = new Dustbin(boxXpos-80, boxYpos-75, 20,100 , {isStatic:true})

	ball = new Ball(80,500)
	 
	ground = new Ground(600,height,1536000,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  ground.display();
  dustbin.display()
  ball.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.9,y:-1})
	}

	if(keyCode == DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-0.9,y:-1})
	}

	if(keyCode == LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-0.9,y:0})
	}

	if(keyCode == RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.9,y:0})
	}
}




