const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var bg="bg2.jpg"
var backgroundimage
var score=0
var castle
var cannon
var cloud
var flyingMan,ManFlying
function preload(){
    GetBackgroundImage()
    castle=loadImage("castle_4.png")
cannon=loadImage("cannon.png")
cloud=loadImage("cloud.png")
ManFlying=loadImage("flyingMan.png")
}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70)
    log1=new Log(810,260,300,PI/2 )    
    log2=new Log(810,180,300,PI/2 )   
    log3=new Log(760,120,150,PI/7 )  
    log4=new Log(870,120,150,-PI/7 )  
    log5=new Log(230,180,80,PI/2)
    ground = new Ground(600,displayHeight/2-200,1200,20)
platform=new Ground(150,305,300,170)
flyingMan=createSprite(100,750,20,20)
flyingMan.addImage("flying",ManFlying)
flyingMan.scale=0.5
flyingManbody=Bodies.circle(100,750,20)
World.add(world,flyingManbody)
}

function draw(){
 if(backgroundimage)  
    background(backgroundimage);
    Engine.update(engine);
    textSize(25)
    text("Score"+score,width-300,20)
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    image(castle,800,100,300,300)
    image(cannon,145,750,200,200)
    image(cloud,90,850,300,200)
    drawSprites()
flyingManbody.x=flyingMan.x
flyingManbody.y=flyingMan.y
if(keyWentDown("space")){
    Matter.Body.applyForce(flyingManbody.body,flyingManbody.body.position,{x:50,y:-50})
}
}
function mouseDragged(){
}

function mouseReleased(){
}
function keyPressed(){
    if(keyCode==32){
   /* Matter.Body.applyForce(flyingManbody.body,flyingManbody.body.position,{x:50,y:-50})*/  
 }
}
async function GetBackgroundImage(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON=await response.json()
var datetime=responseJSON.datetime
var hour=datetime.slice(11,13)
if(hour>=06&&hour<=19){
    bg="bg.png"
}else{
    bg="bg2.jpg"
}
backgroundimage=loadImage(bg)
}