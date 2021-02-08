
class Cannon{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,pointB:pointB
        }
    this.sling1=loadImage("cannon.png")
      this.pointB=pointB
    this.string=Constraint.create(options)
    World.add(world,this.string)
    }
attach(body){
    this.string.bodyA=body
}
 fly(){

  this.string.bodyA=null 
}
    display(){
 image(this.sling1,200,800,200,200)
if(this.string.bodyA){


    var pointA=this.string.bodyA.position
var pointB=this.pointB
push()
stroke(48,22,8)
//image(this.sling1,pointA.x+25,pointA.y-10,15,30)
pop()
}
}

}
