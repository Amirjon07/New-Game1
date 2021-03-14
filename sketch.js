const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var bg="Background.jpg"
var backgroundimage
var score=0
var castle
var cannon
var cloud
var flyingMan,ManFlying
var gameState=0
var game,form,player
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

/*flyingMan=createSprite(100,750,20,20)
flyingMan.addImage("flying",ManFlying)
flyingMan.scale=0.5
flyingManbody=Bodies.circle(100,750,20,{isStatic:true})
World.add(world,flyingManbody)*/
flyingMan=new Flyingman(400,800,80)
cannon=new Cannon(flyingMan.body,{x:400,y:800})
}

function draw(){
    if(gameState==0){
game=new Game()
game.start()
    }
 if(backgroundimage)  
    background(backgroundimage);
  /*  Engine.update(engine);
    textSize(25)
    text("Score"+score,width-300,20)
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    image(castle,1000,10,500,400)
  //  image(cannon,145,750,200,200)
    image(cloud,90,850,300,200)
  
flyingMan.display()
cannon.display()*/
//if(keyWentDown("space")){
  //  Matter.Body.applyForce(flyingManbody.body,flyingManbody.body.position,{x:50,y:-50})
//}
}
function mouseDragged(){
}

function mouseReleased(){
}
function keyPressed(){
    if(keyCode==32){
    Matter.Body.applyForce(flyingMan.body,flyingMan.body.position,{x:7,y:-7})  
    cannon.fly()
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