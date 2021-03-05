class Sling{
    constructor(bodyA,pointB){
        this.pointB=pointB;
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:10
        }
       
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
      }
    display(){
        if(this.sling.bodyA){
            strokeWeight(2);
           line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}