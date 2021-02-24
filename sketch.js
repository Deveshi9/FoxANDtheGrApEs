 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 var engine,world;
 var score = 0;
function preload(){
  bgIMG = loadImage("bg.jpg")
  newton = loadImage("unnamed.png")
   tree = loadImage("tree.png")
}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  gr = new Ground(600,600,1200,50)
  apple1 = new Apple (900,150,35)
  apple2 = new Apple (1050,220,35)
  apple3 = new Apple (1000,300,35)
  apple4 = new Apple (890,250,35)
  apple5 = new Apple (800,330,35)
  stone = new Stone(250,480,20)
  Sling = new slingshot(stone.body,{x:230,y:490})
  
}

function draw() {
  background(bgIMG);  
  Engine.update(engine)
  textSize(25);
  text("score:"+score,200,30)
  fill("MediumSeaGreen")
  text("Help the Fox to Get down Grapes!!:)",50,70)
  image(newton,200,380,200,200)
  image(tree,700,100,500,500);
  gr.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  stone.display();
  Sling.display();
  detectcollision(stone,apple1);
  detectcollision(stone,apple2);
  detectcollision(stone,apple3);
  detectcollision(stone,apple4);
  detectcollision(stone,apple5);
  
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
   Matter.Body.setPosition(stone.body,{x:235,y:420})
    Sling.attach(stone.body)
  }
}

function detectcollision(Astone,Amango){
    var posA=Astone.body.position
    var posB =Amango.body.position
    var distance = dist(posA.x,posA.y,posB.x,posB.y)
    if(distance<=Astone.r+Amango.r){
      Matter.Body.setStatic(Amango.body,false)
    
    }
  }