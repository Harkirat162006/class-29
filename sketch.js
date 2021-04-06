const Engine= Matter.Engine;
const World = Mattwe.world;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,miiniG,miniG2
var block1,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var hexa_image,hexa

var chain

function preload(){

  hexa_image=loadImage("polygon.png")
}



function setup() {
  createCanvas(800,600);

   engine=Engine.create();
   world=engine.world;

   ground=new Ground(400,580,1000,20);
   miiniG= new Ground(640,250,220,20);
   miniG2=new Ground(330,450,250,20);

   block1=new block(240,425,30,30);
   block2=new block2(240,425,30,30);
   block4=new block2(240,425,30,30);
   block5=new block(240,425,30,30);
   block6=new block2(240,425,30,30);
   block7=new block(240,425,30,30);
   block8=new block(240,425,30,30);
   block9=new block2(240,425,30,30);
   block10=new block(240,425,30,30);
   block11=new block2(240,425,30,30);
   block12=new block(240,425,30,30);
   block13=new block(240,425,30,30);
   block14=new block2(240,425,30,30);
   block15=new block(240,425,30,30);
   block16=new block(240,425,30,30);
   block17=new block2(240,425,30,30);
   block18=new block(240,425,30,30);
   block19=new block2(240,425,30,30);
   block20=new block(240,425,30,30);
   block21=new block2(240,425,30,30);
   block22=new block2(240,425,30,30);
   block23=new block(240,425,30,30);
   block24=new block2(240,425,30,30);
   block25=new block2(240,425,30,30);
   block3=new block(240,425,30,30);

    hexa = Bodies.circle(50,200,20);
    world.add(world,hexa)

    chain= new Chain(hexa,{x:15,y:200})


    Engine.run(engine);
}


function draw() {
  
  rectMode(CENTER);
  
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
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   block22.display();
   block23.display();
   block24.display();
   block25.display();

    chain.display();

    imageMode(CENTER);
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)

        drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(hexa,{x:mouseX,y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function mouseReleased(){
  chain.fly();
}





