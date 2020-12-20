class BaseClass{
    constructor(x, y, width, height, fill_color, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.fill_color = fill_color
        
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display()
      {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
          //translate(this.body.position.x, this.body.position.y);
          //rotate(angle);
          //imageMode(CENTER);
          //image(this.image, 0, 0, this.width, this.height);        
          rectMode(CENTER);
          fill(this.fill_color);
          rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}