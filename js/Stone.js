class  Stone {
    constructor(x,y,width,height)
    {
        let options ={
            restitution : 0.8,
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/stone.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}