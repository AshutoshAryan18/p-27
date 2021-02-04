class Rope {
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=offsetx
        this.offsety=offsety

        var options={
            bodyA:body1,
            bodyB:body2,
            posA:{x:this.offsetx,y:this.offsety}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    }
    display(){
        var posA =this.rope.bodyA.position;
        var posB =this.rope.bodyB.position;
        var offx =posA.x+this.offsetx;
        var offy =posA.x+this.offsety;
        strokeWeight(4);
        stroke("blue")
        line (offx,offy,posB.x,posB.y)
    }
}