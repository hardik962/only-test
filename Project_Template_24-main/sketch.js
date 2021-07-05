const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;
 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase (300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  player3 = new PlayerArcher (player.body.position.x,player.body.position.y,40,40 );
 
  //Create Player Archer Object


  computerBase = new ComputerBase (
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer (
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerarrow = new ComputerArrow (
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
    
  );
  computerarcher1= new computerArcher (computer.body.position.x, computer.body.position.y,40,40)
  //Create an arrow Object
  player5 = new  playerArrow (
    width - 340,
    computer.body.position.y - 180,
    120,
    120
    
  );
 
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  player3.display();
   computerarrow.display();
  
   player5.display();
   computerarcher1.display();



  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
arrow.shoot(player3.body.angle)

  }
}



