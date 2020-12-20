const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform;
var block1, block2, block3, block4, block5, block6;
var x_block_offset, y_block_offset, block_width, block_height;
var stone, slingshot;

function preload() 
{
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(width/2, height/2, 200, 10);

    block_width = 30;
    block_height = 40;
    x_block_offset = (width / 2) - block_width;
    y_block_offset = (height / 2) - (block_height / 2) ;
    

    // Level 1
    block1 = new Box (x_block_offset, y_block_offset, block_width, block_height, "green");
    x_block_offset += block_width;
    block2 = new Box (x_block_offset, y_block_offset, block_width, block_height, "green");
    x_block_offset += block_width;
    block3 = new Box (x_block_offset, y_block_offset, block_width, block_height, "green");
    
    // Level 2
    x_block_offset = (width / 2) - (block_width * 0.5);
    y_block_offset -= block_height;
    block4 = new Box (x_block_offset, y_block_offset, block_width, block_height, "yellow");
    
    x_block_offset += block_width;
    block5 = new Box (x_block_offset, y_block_offset, block_width, block_height, "yellow");

    // Level 3
    x_block_offset = (width / 2) - (block_width * 0);
    y_block_offset -= block_height;
    block6 = new Box (x_block_offset, y_block_offset, block_width, block_height, "red");

    // Polygon & Sling shot
    //polygon = Bodies.circle(50, 200, 20);
    stone = new Stone(200, 150, 20);
    //slingshot = new Slingshot(stone.body,{x:50, y:200});
    slingshot = new Slingshot(stone.body, {x:150, y:150});

    //World.add(world, polygon);

    //slingShot = new SlingShot(this.polygon, {x:100, y:200});

    /*
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    */
}

function draw()
{
    //background(backgroundImg);
    background(0);
    Engine.update(engine);

    ground.display();
    platform.display();

    //Level 1
    block1.display();
    block2.display();
    block3.display();

    //Level 2
    block4.display();
    block5.display();

    //Level 3
    block6.display();

    // Polygon & Slingshot
    stone.display();
    slingshot.display();

    /*
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();*/    
}

function mouseDragged(){
    //Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}


function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(stone.body);
    }
}
