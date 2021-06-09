var border_left, line2, line3, line4, border_right;
var border_up, border_down;
var ball;
var  monster1, monster2, monster3, monster4, monster5, monster6, monster7, monster8;
var m_img1, m_img2, m_img3, m_img4, m_img5, m_img6, m_img7, m_img8;
var edges;
var ball_img;
// var PLAY = 1;
// var END = 0;
var gameState = "play";
var score = 0;

function preload() {
  m_img1 = loadImage("images/monster1.jpg");
  m_img2 = loadImage("images/monster2.jpg");
  m_img3 = loadImage("images/monster3.jpg");
  m_img4 = loadImage("images/monster4.jpg");
  m_img5 = loadImage("images/monster5.jpg");
  m_img6 = loadImage("images/monster6.jpg");
  m_img7 = loadImage("images/monster7.jpg");
  m_img8 = loadImage("images/monster8.jpg");
  ball_img = loadImage("images/ball.jpg");
}

function setup() {
  createCanvas(800,608);

  textSize(20);
  textFont("italics");

  ball = createSprite(400, 300, 10, 10);
  ball.addImage(ball_img);
  ball.scale = 0.2;

  border_left  = createSprite(0,608,5,1220);
  border_left.shapeColor = "cyan";

  line2 = createSprite(200,608,5,1220);
  line2.shapeColor = "yellow";

  line3 = createSprite(400,608,5,1220);
  line3.shapeColor = "yellow";

  line4 = createSprite(600,608,5,1220);
  line4.shapeColor = "yellow";

  border_right = createSprite(800,608,10,1220);
  border_right.shapeColor = "cyan";

  border_up = createSprite(0, 0, 1600, 10);
  border_up.shapeColor = "cyan";

  border_down = createSprite(0, 608, 1600, 10);
  border_down.shapeColor = "cyan";

  monster1 = createSprite(100, 500, 20, 20);  
  monster1.addImage(m_img1);
  monster1.velocityY = -8;
  monster1.scale = 0.5;

  monster2 = createSprite(300, 100, 20, 20);
  monster2.addImage(m_img2);
  monster2.velocityY = 8;
  monster2.scale = 0.5;

  monster3 = createSprite(500, 500, 20, 20);
  monster3.addImage(m_img3);
  monster3.velocityY = -8;
  monster3.scale = 0.5;

  monster4 = createSprite(700, 500, 20, 20);
  monster4.addImage(m_img4);
  monster4.velocityY = 8;
  monster4.scale = 0.5;

  monster5 = createSprite(150, 100, 20, 20);
  monster5.addImage(m_img5);
  monster5.velocityY = -8;
  monster5.scale = 0.5;

  monster6 = createSprite(250, 400, 20, 20);
  monster6.addImage(m_img6);
  monster6.velocityY = 8;
  monster6.scale = 0.5;

  monster7 = createSprite(550, 100, 20, 20);
  monster7.addImage(m_img7);
  monster7.velocityY = -8;
  monster7.scale = 0.5;

  monster8 = createSprite(750, 100, 20, 20);
  monster8.addImage(m_img8);
  monster8.velocityY = 8;
  monster8.scale = 0.5;
}

function draw() {
  background("white");

  //if(gameState === "play") {
    text("Count:- " + score, 0, 100);
  //}

  if (score === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }

  if(keyDown(LEFT_ARROW)){
    ball.x = ball.x - 50;
  }

  if(keyDown(RIGHT_ARROW)){
    ball.x = ball.x + 50;
  }

  if(monster1.isTouching(ball) || monster2.isTouching(ball) || monster3.isTouching(ball) || monster4.isTouching(ball) || monster5.isTouching(ball) || monster6.isTouching(ball) || monster7.isTouching(ball) || monster8.isTouching(ball)) {
    monster1.velocityY = 0;
    monster2.velocityY = 0;
    monster3.velocityY = 0;
    monster4.velocityY = 0;
    monster5.velocityY = 0;
    monster6.velocityY = 0;
    monster7.velocityY = 0;
    monster8.velocityY = 0;
    score = score + 1;
    gameState = "end";
  }

  if(gameState === "end") {
    gameState = "play";
  }
  
  edges = createEdgeSprites();
  monster1.bounceOff(edges[2]);
  monster1.bounceOff(edges[3]);

  monster2.bounceOff(edges[2]);
  monster2.bounceOff(edges[3]);

  monster3.bounceOff(edges[2]);
  monster3.bounceOff(edges[3]);

  monster4.bounceOff(edges[2]);
  monster4.bounceOff(edges[3]);

  monster5.bounceOff(edges[2]);
  monster5.bounceOff(edges[3]);

  monster6.bounceOff(edges[2]);
  monster6.bounceOff(edges[3]);

  monster7.bounceOff(edges[2]);
  monster7.bounceOff(edges[3]);

  monster8.bounceOff(edges[2]);
  monster8.bounceOff(edges[3]);

  border_left.display();    
 line2.display();    
 line3.display();    
 line4.display();    
 border_right.display();    
 border_up.display();
 border_down.display();
 monster1.display();
 monster2.display();
 monster3.display();
 monster4.display();
 monster5.display();
 monster6.display();
 monster7.display();
 monster8.display();
 ball.display();
 }
