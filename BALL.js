class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':10000,
          'density':.2
      }
      this.body = Bodies.circle(x, y, 5, options);
      this.width = 10;
      this.height = 10;
      this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      fill("#CAD2D9");
      ellipse(0, 0, this.width,this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, 40, 40);
      pop();
    }
  };