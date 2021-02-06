const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;


function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
    createCanvas (1200,800);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground (600, 785, 1200, 20);
    stand = new Ground (500, 325, 275, 50);

    //level 1 of pyramid
    block1 = new Box (400, 275, 30, 40);
    block2 = new Box (430, 275, 30, 40);
    block3 = new Box (460, 275, 30, 40);
    block4 = new Box (490, 275, 30, 40);
    block5 = new Box (520, 275, 30, 40);
    block6 = new Box (550, 275, 30, 40);
    block7 = new Box (580, 275, 30, 40);

    //level 2 of pyramid
    block8 = new Box (430, 235, 30, 40);
    block9 = new Box (460, 235, 30, 40);
    block10 = new Box (490, 235, 30, 40);
    block11 = new Box (520, 235, 30, 40);
    block12 = new Box (550, 235, 30, 40);

    //level 3 of pyramid
    block13 = new Box (460, 195, 30, 40);
    block14 = new Box (490, 195, 30, 40);
    block15 = new Box (520, 195, 30, 40);

    //top of the pyramid
    block16 = new Box (490, 155, 30, 40);

    //polygon
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot (polygon,{x:100,y:200});
}

function draw() {
    background(255);

    // Engine.update(engine);

    textSize(20);
    fill("black");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    //Display ground
    ground.display();

    //Display stand
    stand.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    

    //Displaying all blocks
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("gray");
    block16.display();
    fill("skyblue");


    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }

function mouseReleased(){
    slingShot.fly();
  }

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}