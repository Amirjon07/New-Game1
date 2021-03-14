class Game{
    constructor(){

    }
/*getState(){
    var gameeref=database.ref('gameState')
    gameeref.on("value",function(data){
        gameState=data.val()
    }) 
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}*/

 start(){
    if(gameState==0){
    //    player=new Player()
   /*   var playerCountref=await database.ref('playerCount').once("value")
      if(playerCountref.exists()){
       playerCount=playerCountref
    
        player.getCount()*/

        form=new Forms()
        form.display() }

      }
/*play(){
    form.hide()
    //textSize(30)
    Player.getplayerinfo()
    player.getcarsatend()
    if(allPlayers!=undefined){
     background(rgb(198,135,103))
     image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0
     var x=175
     var y
        //  var displayPosition=130
        for(var plr in allPlayers){
          index=index+1
          x=x+200
          y=displayHeight-allPlayers[plr].distance
          cars[index-1].x=x
          cars[index-1].y=y
            if(index==player.index){
          fill("red")
          ellipse(x,y,60,60)
                cars[index-1].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
                /*      fill("red")
            }else{
                fill("black")
            }
       displayPosition+=22
       textSize(15)
       text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
     }
     }
    }*/
/*if(keyIsDown(UP_ARROW)&&player.index!=null){
    player.distance+=10
    player.update()
}
if(player.distance>3860){
    gameState=2
player.rank+=1
Player.updatecarsatend(player.rank)
}
drawSprites()

}
end(){
    console.log("Game Over")
    console.log(player.rank)
}*/
}