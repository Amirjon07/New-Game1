var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var bg="bg.png"
var backgroundimage
var score=0
var castle
var cannon,cannon1
var cloud
var flyingMan,ManFlying
var Castle1
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

  database = firebase.database();
 // cannon1=new Cannon(displayWidth/2-300,displayHeight/2+300,200)
 // flyingMan=new Flyingman(cannon1.x,cannon1.y,80)
   flyingMan=new Flyingman(displayWidth/2-300,displayHeight/2+300,80)
 //cannon1=new Cannon(flyingMan.body,{x:displayWidth/2-200,y:displayHeight/2+200})
Castle1=new Castle(displayWidth/2,displayHeight/2-350,400)
game =new Game()
  game.start()
}
function draw(){
    if(backgroundimage)  
    background(backgroundimage);
  
    game.play()
}
function mouseDragged(){
//    Matter.Body.setPosition(cannon1.body, {x:mouseX,y:mouseY})
 //   Matter.Body.setPosition(flyingMan.body, {x:mouseX+100,y:mouseY-45})
}

function mouseReleased(){
  // Matter.Body.setposition(flyingMan.body,{x:Castle1.x,y:Castle1.y})  
}
function keyPressed(){
    if(keyCode==32){
 //   Matter.Body.applyForce(flyingMan.body,flyingMan.body.position,{x:7,y:-7})  
 Matter.Body.setPosition(flyingMan.body,{x:Castle1.x,y:Castle1.y})  
 // cannon.fly()
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