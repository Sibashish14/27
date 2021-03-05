class Stone{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var options={
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.stoneImg = loadImage("images/stone.png");
        this.stone = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.stone);
    }
    display(){
        push();
        translate(this.stone.position.x,this.stone.position.y);
        rotate(this.stone.angle);
        imageMode(CENTER);
        image(this.stoneImg,0,0,this.width,this.height);
        pop();
    }
}