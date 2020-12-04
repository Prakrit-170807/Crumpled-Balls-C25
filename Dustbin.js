class Dustbin{
    constructor(x,y,width,height){
        this.width = width
        this.height = height

        var options ={
            density:10,friction:100
        }
    
        this.Dustbin = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("dustbin.png")
        World.add(world,this.Dustbin);
    }
    display(){
        push()
        fill('black')
        translate(this.Dustbin.position.x,this.Dustbin.position.y)
        rotate(this.Dustbin.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image, 80, 0, 250, 190);
        pop()  
    }    
}