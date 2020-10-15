class left{

    constructor(x,y,width,height){

        var option = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2  
        }
        
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.bin1 = loadImage("dustbingreen.png");
    
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
    }
}