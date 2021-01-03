// create the variables .
var ship1,ship2,ship3,ship4,ship5,playership;
var eship1,eship2,eship3,eship4,eship5,eplayership;
var eship1_img,eship2_img,eship3_img,eship4_img,eship5_img,eplayership_img;
var ship1_img,ship2_img,ship3_img,ship4_img,ship5_img,playership_img;
var back_img;
var engine,world;
var score=0;
var enscore=0;
var start,start_img;
var edge;
var line,group,group2,guard,guard1,guards;

function preload(){
  start_img=loadImage("select.png");
//Load the Image for background here.
  back_img=loadImage("back.png");

//Load the Images for the team 1 here. 
  ship1_img=loadImage("ship2.png");
  ship2_img=loadImage("ship1.png");
  ship3_img=loadImage("ship2.png");
  ship4_img=loadImage("ship1.png");
  ship5_img=loadImage("ship2.png");
  playership_img=loadImage("player.png");

//Load the Images for the team2 here.  
  eship1_img=loadImage("enship1.png");
  eship2_img=loadImage("enship2.png");
  eship3_img=loadImage("enship1.png");
  eship4_img=loadImage("enship2.png");
  eship5_img=loadImage("enship1.png");
  eplayership_img=loadImage("enemyship.png");

}
function setup() {
//Create Canvas of Desiered Size.  
  createCanvas(1800,700);
var start=createSprite(1300,100,20,20);
start.addImage(start_img);
start.scale=0.8;
 group = createGroup();
 group2 = createGroup();
 guards=createGroup();

guard=createSprite(1000,10,10,130);
guard.shapeColor="red";
guard1=createSprite(1050,70,100,10);
guard1.shapeColor="red";

guards.add(guard);
guards.add(guard1);

guard=createSprite(700,690,10,140);
guard.shapeColor="yellow";
guard1=createSprite(655,620,100,10);
guard1.shapeColor="yellowq";

guards.add(guard);
guards.add(guard1);
//Create Variables for team1 and add properties to them.

    ship1=createSprite(1700,200,20,20);
    ship1.addImage("add",ship1_img);
    ship1.scale=0.5;
    ship1.velocityY=-10;

    ship2=createSprite(1600,300,20,20);
    ship2.addImage("king",ship2_img);
    ship2.scale=0.5;
    ship2.velocityY=10;

    
    ship3=createSprite(1700,400,20,20);
    ship3.addImage("ooo",ship3_img);
    ship3.scale=0.5;
    ship3.velocityY=7;

    ship4=createSprite(1600,500,20,20);
    ship4.addImage("hi",ship4_img);
    ship4.scale=0.5;
    ship4.velocityY=-10;
    
    ship5=createSprite(1700,600,20,20);
    ship5.addImage("ho",ship5_img);
    ship5.scale=0.5;
    ship5.velocityY=10;

 //This is the  player that the player has to play.
       playership=createSprite(1500,400,20,20);
      playership.addImage("emperor",playership_img);
      playership.scale=0.7;

//Create Variaable for team2 and add properties to them.
    eship1=createSprite(100,200,20,20);
    eship1.addImage("add",eship1_img);
    eship1.scale=0.5;
    eship1.velocityY=10;

    eship2=createSprite(200,300,20,20);
    eship2.addImage("king",eship2_img);
    eship2.scale=0.5;
    eship2.velocityY=-10;

    eship3=createSprite(100,400,20,20);
    eship3.addImage("ooo",eship3_img);
    eship3.scale=0.5;
    eship3.velocityY=-10;

    eship4=createSprite(200,500,20,20);
    eship4.addImage("hi",eship4_img);
    eship4.scale=0.5;
    eship4.velocityY=10;

    eship5=createSprite(100,600,20,20);
    eship5.addImage("ho",eship5_img);
    eship5.scale=0.5;
    eship5.velocityY=7;
 //This is the  player that the player has to play.
      eplayership=createSprite(300,400,20,20);
      eplayership.addImage("emperor",eplayership_img);
      eplayership.scale=0.7;


  
}

function draw() {

  edge=createEdgeSprites();
 
        group.bounce(group2);
group.bounceOff(guards);
group2.bounceOff(guards);

playership.bounceOff(guards);
eplayership.bounceOff(guards);
ship1.bounceOff(edge[2]);
ship1.bounceOff(edge[3]);
ship5.bounceOff(edge[2]);
ship5.bounceOff(edge[3]);
ship2.bounceOff(edge[3]);
ship2.bounceOff(edge[2]);
ship3.bounceOff(edge[2]);
ship3.bounceOff(edge[3]);
ship4.bounceOff(edge[2]);
ship4.bounceOff(edge[3]);

eship1.bounceOff(edge[2]);
eship1.bounceOff(edge[3]);
eship5.bounceOff(edge[2]);
eship5.bounceOff(edge[3]);
eship2.bounceOff(edge[3]);
eship2.bounceOff(edge[2]);
eship3.bounceOff(edge[2]);
eship3.bounceOff(edge[3]);
eship4.bounceOff(edge[2]);
eship4.bounceOff(edge[3]);
//Create Background here. 
    background(back_img);

    fill ("yellow");
    textSize(15);
    textFont("Times New Roman");
    text ("Press space to shoot",1100,100);

    fill ("yellow");
    textSize(15);
    textFont("Times New Roman");
    text ("Press q to shoot",500,100);
//Text the score for team 1.


    fill ("yellow");
    textSize(15);
    textFont("Times New Roman");
    text ("KING OF PACIFIC'S SCORE :"+score,1400,100);

//Text the Score for team2 .
    fill ("yellow");
    textSize(15);
    textFont("Times New Roman");
    text ("KING OF ATLANTIC'S SCORE :"+enscore,100,100);

//Draw the Sprites here.
  drawSprites();

//Create For loop here to Divide the places for team1 and team2.
    for (var i = 0; i < 700; i=i+20) {
    line(900,i,900,i+10);
    }
//Give Velocity to the player1 to move according ith the arrow movement.

//Set the velocity to player1 when he press the Up arrow.
    if(keyWentDown("UP_ARROW")){
      playership.velocityY=-15;
    }

    if(keyWentUp("UP_ARROW")){
      playership.velocityY=0;
    }
//Set the velocity to player1 when he press the Down arrow.
    if(keyWentDown("DOWN_ARROW")){
      playership.velocityY=15;
      }
      
      if(keyWentUp("DOWN_ARROW")){
      playership.velocityY=0;
    }
 
//Set the velocity to player1 when he press the Left arrow.   
    if(keyWentDown("LEFT_ARROW")){
    playership.velocityX=-15;
      }
      
    if(keyWentUp("LEFT_ARROW")){
      playership.velocityX=0;
      }
  
//Set the velocity to player1 when he press the Right arrow.      
    if(keyWentDown("RIGHT_ARROW")){
    playership.velocityX=15;
    }

    if(keyWentUp("RIGHT_ARROW")){
      playership.velocityX=0;
    }


//Give Velocity to the player2 to move according ith the keys movement.

//Set the velocity to player2 when he press the W key.
    if(keyWentDown("w")){
      eplayership.velocityY=-15;
    }

    if(keyWentUp("w")){
      eplayership.velocityY=0;
    }
 //Set the velocity to player2 when he press the S key.
    if(keyWentDown("s")){
      eplayership.velocityY=15;
      }
      
      if(keyWentUp("s")){
      eplayership.velocityY=0;
    }
 //Set the velocity to player2 when he press the  A key..
    if(keyWentDown("a")){
    eplayership.velocityX=-15;
      }
      
    if(keyWentUp("a")){
      eplayership.velocityX=0;
      }
  
//Set the velocity to player2 when he press the D key.      
    if(keyWentDown("d")){
    eplayership.velocityX=15;
    }

    if(keyWentUp("d")){
      eplayership.velocityX=0;
    }

if(keyWentDown("space")){
shoot(playership.x,playership.y)
};


if(keyWentDown("q")){
shoot2(eplayership.x, eplayership.y)
};


if(frameCount%70===0){
  shoot(ship1.x,ship1.y)
}

if(frameCount%90===0){
  shoot(ship2.x,ship2.y)
}

if(frameCount%120===0){
  shoot(ship3.x,ship3.y)
}
  
if(frameCount%150===0){
  shoot(ship4.x,ship4.y)
}

if(frameCount%170===0){
  shoot(ship5.x,ship5.y)
}

if(frameCount%60===0){
  shoot2(eship1.x,eship1.y)
}

if(frameCount%100===0){
  shoot2(eship2.x,eship2.y)
}

if(frameCount%110===0){
  shoot2(eship3.x,eship3.y)
}
  
if(frameCount%160===0){
  shoot2(eship4.x,eship4.y)
}

if(frameCount%180===0){
  shoot2(eship5.x,eship5.y)
}













if(group.isTouching(eship1)){
  eship1.destroy();
  group.destroyEach();
  group2.destroyEach();
 
  score=score+2;
}

if(group.isTouching(eship2)){
  eship2.destroy();
  group.destroyEach();
  group2.destroyEach();
score=score+3;
}

if(group.isTouching(eship3)){
  eship3.destroy();
  group.destroyEach();
  group2.destroyEach();
  score=score+2;
}

if(group.isTouching(eship4)){
  eship4.destroy();
  group.destroyEach();
  group2.destroyEach();
  score=score+3;
}

if(group.isTouching(eship5)){
  eship5.destroy();
  group.destroyEach();
  group2.destroyEach();
  score=score+2;
}

if(group.isTouching(eplayership)){
  eplayership.destroy();
  group.destroyEach();
  group2.destroyEach();
  score=score+5;
}
if(group2.isTouching(ship1)){
  ship1.destroy();
  group.destroyEach();
  group2.destroyEach();
  enscore=enscore+2;
}

if(group2.isTouching(ship2)){
  ship2.destroy();
  group.destroyEach();
  group2.destroyEach();
  enscore=enscore+3;
}

if(group2.isTouching(ship3)){
  ship3.destroy();
  group.destroyEach();
  group2.destroyEach();
  enscore=enscore+2;
}

if(group2.isTouching(ship4)){
  ship4.destroy();
  group.destroyEach();
  group2.destroyEach();
  enscore=enscore+3;
}

if(group2.isTouching(ship5)){
  ship5.destroy();
  group.destroyEach();
  group2.destroyEach();
  enscore=enscore+2;
}

if(group2.isTouching(playership)){
  playership.destroy();
  group.destroyEach();
  group2.destroyEach();
  enscore=enscore+5;
}


if(score===17){
  fill("brown");
  textSize(50);
  textFont("Georgia");
  text ("KING OF OCEAN YOU WON !!!",600,350);
  group.destroyEach();
  group.velocityX=0;
  group2.destroyEach();
  group2.velocityX=0;
ship1.destroy();
ship2.destroy();
ship3.destroy();
ship4.destroy();
ship5.destroy();
eship1.destroy();
eship2.destroy();
eship3.destroy();
eship4.destroy();
eship5.destroy();
eplayership.destroy();
}
if(enscore===17){
  fill("blue");
  textSize(50);
  textFont("Georgia");
  text ("KING OF OCEAN YOU WON !!!",600,350);
  group.destroyEach();
  group.velocityX=0;
  group2.destroyEach();
  group2.velocityX=0;
ship1.destroy();
ship2.destroy();
ship3.destroy();
ship4.destroy();
ship5.destroy();
playership.destroy();
eship1.destroy();
eship2.destroy();
eship3.destroy();
eship4.destroy();
eship5.destroy();

}


   


}

function shoot(x,y){
   var shot=createSprite(x,y,15,5);
   shot.velocityX=-40;
   shot.shapeColor=("brown"); 
   shot.lifetime=100;
 
   group.add(shot);
    }

function shoot2(x,y){
  var shot=createSprite(x,y,15,5);
  shot.velocityX=40;
  shot.shapeColor=("blue" ); 
  shot.lifetime=100;
  group2.add(shot);
       }