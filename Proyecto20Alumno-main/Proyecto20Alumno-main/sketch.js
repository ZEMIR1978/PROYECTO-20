var astronaut= createSprite(300,230);

astronaut.scale = 0.1;
var bg;bgimg;
var bath,bathimg;
var brush,brushimg;
var drink,drinkimg;
var eat,eatimg;
var gym,gymimg;
var move,moveimg;
var sleep,sleepimg;


function preload(){
  bgimg = loadImage("iss.png");
  bathimg = loadAnimation("bath1.png","bath2.png");
  brushimg = loadAnimation("brush.png");
  drinkingimg = loadAnimation("drink1.pmg","drink2.png");
  eatimg = loadAnimation("eat1.png","eat2.png");
  gymimg = loadAnimation("gym1.png","gym2.png");
  moveimg = loadAnimation("move.png","move1.png");
  sleepimg = loadAnimation("sleep.png");
  
}






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bg.addImage("bg",bgimg);
  bath.addImage("bath",bathimg);
  brush.addImage("brush",brushimg);
  drink.addImage("drink",drinkimg);
  eat.addImage("eat",eatimg);
  gym.addImage("gym",gymimg);
  move.addImage("move",moveimg);
  sleep.addImage("sleep",sleepimg);
  astronaut.addAnimation("sleeping",sleepimg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  text("instruciones",10,10);
  text("Flecha hacia arriba = Cepillarse",10,20);
  text("Flecha hacia abajo = Ejercitarse",10,30);
  text("Flecha Izq = Comer",10,40);
  text("Flecha derecha = bañarse",10,50);
  text("tecla m = Moverse",10,60);





}

if (keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing",brushimg)
  astronaut.changeAnimation("brushing")
  astronaut.y = 350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}



if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gym",gymimg)
  astronaut.changeAnimation("gym")
  astronaut.y = 350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}



if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("eat",eatimg)
  astronaut.changeAnimation("eat")
  astronaut.y = 350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}


if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("bath",bathimg)
  astronaut.changeAnimation("bath")
  astronaut.y = 350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}




if (keyDown("M")) {
  astronaut.addAnimation("move",moveimg)
  astronaut.changeAnimation("move")
  astronaut.y = 350;
  astronaut.velocityX=2
  astronaut.velocityY=-2
}



