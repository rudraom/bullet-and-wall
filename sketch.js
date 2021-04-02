
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var Bullet,wall,thickness,speed,whight;


function setup() {
	createCanvas(900, 300);

	
	engine = Engine.create();
	world = engine.world;
	thickness=random(22,83)
	Bullet = createSprite(130,150,40,20);
	wall = createSprite(800,150,30,90);
	//Create the Bodies Here.
	speed=random(23,31)
	weight=random(30,52)
    Bullet.velocityX=speed;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
if (hasCollided(Bullet,wall)){
Bullet.velocityX=0;
var damege=0.5 *weight *speed * speed/(thickness*thickness*thickness);
if (damege>10){
wall.shapeColor=color(255,0,0);
}
if(damege<10){
wall.shapeColor=color(0,255,0)
}
}
  drawSprites();
 console.log (Bullet.velocityX)
}

function hasCollided(lbullet,lwall){
BulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (BulletRightEdge>=wallLeftEdge){
return true
}
return false;
}

