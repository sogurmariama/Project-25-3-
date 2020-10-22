class paper {
    constructor(x, y) {
      var options = {
          'restitution':0.2,
          'friction':0,
          'density':1.2,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, 70, options);
      this.image=loadImage("Sprites25/paper2.0.png")
      this.radius =70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(3);
      imageMode(CENTER)
      image(this.image,10,10,70,70);
      pop();
    }
  };