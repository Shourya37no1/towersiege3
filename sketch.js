const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var  world,engine;
var groundObject,block1,polygon,polygon_img;
var launcherObject,polygonbody;
var score= 0 ;


function setup() {
 var canvas = createCanvas(1300,600);
engine = Engine.create();
 world = engine.world; 
 polygon=new Polygon(100,400,30);
    block1=new Box (300,275,30,40);
    block2=new Box (330,275,30,40);
    block3=new Box (360,275,30,40);
    block4=new Box (390,275,30,40);
    block5=new Box (420,275,30,40);
    block6=new Box (450,275,30,40);
    block7=new Box (480,275,30,40);
    block8=new Box (330,238,30,40);
    block9=new Box (360,238,30,40);
    block10=new Box (390,238,30,40);
    block11=new Box (420,238,30,40);
    block12=new Box (450,238,30,40);
    block13=new Box (360,195,30,40);
    block14=new Box (390,195,30,40);
    block15=new Box (420,195,30,40);
    block16=new Box (390,155,30,40);
    block17=new Box (690,140,30,40);
    block18=new Box (660,180,30,40);
    block19=new Box (690,180,30,40);
     block20=new Box (720,180,30,40);
     block21=new Box (630,220,30,40);
     block22=new Box (660,220,30,40);
     block23=new Box (690,220,30,40);
     block24=new Box (720,220,30,40);
    block25=new Box (750,220,30,40);
    groundObject=new Ground(650,height,1200,20);
    groundObject1=new Ground(390,290,200,20);
    groundObject2=new Ground(690,260,200,20);

    
    launcherObject=new SlingShot(polygon.body,{x:100,y:200});
    Engine.run(engine);
    
}

function draw(){
    background("black");
    
    text("score :"+score,700,30)
    textSize(25);
    fill("yellow")


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
    

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    
   
    polygon.display();

    groundObject.display();
groundObject1.display();
 groundObject2.display();
 launcherObject.display();

    drawSprites();
}
function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x: mouseX, y:mouseY});
}

function mouseReleased() {
    launcherObject.fly();
}


function keyPressed() {
	if (keyCode=== 32) {
    //Matter.Body.setPosition(polygon.body, {x:100, y:200}) 
	  launcherObject.attach(polygon.body);
	}
  }