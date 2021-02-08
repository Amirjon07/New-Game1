class Flyingman {
constructor(x,y,r){
var options={isStatic:false}
this.x=x
this.y=y
this.r=r
this.image=loadImage("flyingMan.png")
this.body=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body)
}
display(){
    var pos= this.body.position
    var angle= this.body.angle
    push()
    translate(pos.x,pos.y)
 rotate(angle)
 imageMode(CENTER)
 image(this.image,0,0,this.r,this.r)
 pop()
}
}