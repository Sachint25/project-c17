class paper{

    constructor(x,y,radius){
        var option = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2  
        }
        
        this.body = Bodies.circle(x, y, (radius-20)/2, option);
        World.add(world, this.body);
        this.radius = radius;

        this.paper1 = loadImage("paper.png");

    }

    display(){
        push();
        fill("purple");
        imageMode(CENTER);
        image(this.paper1,this.body.position.x, this.body.position.y,this.radius,this.radius);
        pop();
    }
}