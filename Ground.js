class Ground{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        var ground_options={
            isStatic:true
        }

        this.ground = Bodies.rectangle(width/2, 650, width, 28 ,ground_options);
	    World.add(world, this.ground);
    }
    display(){
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height)
    }
}