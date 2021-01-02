 Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var plinko=[];
var divisions=[];
var particles=[];
var particle;


var divisionHeight=300;
var points1=500;
var points2=500;
var points3=500;
var points4=500;
var points5=100;
var points6=100;
var points7=100;
var points8=200;
var points9=200;
var points10=200;
var score =0;
var count=0;
var gameState="start";



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
    for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
    
    
      plinko.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
    
    
       plinko.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
    
    
       plinko.push(new Plinko(j,275));
  }

     for (var j = 50; j <=width-10; j=j+50){ 
    
    
       plinko.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  
  
 text("Score: "+score,20,30);
 text(points1,670,520);
 text(points2,570,520);
 text(points3,490,520);
 text(points4,410,520);
 text(points5,325,520);
 text(points6,750,520);
 text(points7,100,520);
 text(points8,33,520);
 text(points9,267,520);
 text(points10,190,520);

  Engine.update(engine);
  ground.display();

  if(gameState=="end"){
    textSize(100);
    text("GAME OVER",150,250);
    //return


  }
 
  
   for (var i = 0; i < plinko.length; i++) {
     
     plinko[i].display();
     
   }
   if(particle!=null){
     particle.display();
   
   
  

 
if(particle.body.position.y>760 && particle.body.position.x<300 ){

if(particle.body.position.x<300){
 

  score=score+500;
  particle=null;
  if(count>5){
    gameState="end";
  }
}
}









 

if(particle.body.position.y>301 && particle.body.position.x<600){

  
  score=score+200;
  particle=null;
  if(count>5){
    gameState="end";
  }
}




}



 

if(particle.body.position.x>601 && particle.body.position.y<700){



  score=score+200;
  particle=null;
  if(count>5){
    gameState="end";
  }
}

}








for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}

























function mousePressed(){

  if(gameState!=="end"){

    particle=(mouseX,10,10,10);
    count++;
    
  }







}



