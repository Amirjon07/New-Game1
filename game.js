class Game{
    constructor(){

    }
/*getState(){
    var gameeref=database.ref('gameState')
    gameeref.on("value",function(data){
        gameState=data.val()
    }) 
}*/
update(state){
    database.ref('/').update({
        gameState:state
    })
}

 start(){
    if(gameState==0){
    //    player=new Player()
   /*   var playerCountref=await database.ref('playerCount').once("value")
      if(playerCountref.exists()){
       playerCount=playerCountref
    
        player.getCount()*/

        form=new Form()
        form.display() }

      }
play(){
form.display2() 
    }
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