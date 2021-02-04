class Bob
{
    constructor(x,y,r)
{
    var option={
        isStatic:false,
        restitution:1,
        friction:0,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,option);
    World.add(world,this.body);
}
display(){

    var paperpos=this.body.position;

    push()
    translate(paperpos.x,paperpos.y);
    ellipseMode(RADIUS);
    strokeWeight(3)
    fill("pink")
    ellipse(0,0,this.r);
    pop()
}
}