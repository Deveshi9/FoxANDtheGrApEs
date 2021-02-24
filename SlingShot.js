class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:7.

        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling=Constraint.create(options)
       
       
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(bodyA){
        this.sling.bodyA=bodyA
    }

    display(){
        if(this.sling.bodyA){

        
            var posA=this.sling.bodyA.position
            var posB=this.sling.pointB
       line(posA.x,posA.y,posB.x,posB.y)
        }
    }
   
}

