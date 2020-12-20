class Stone 
{
  constructor(x, y, r)
  {
    //super(x, y, 50, 50);
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.5 //1.0
      }
    
      this.x = x;
      this.y = y;
      this.width = r;
      this.height = r;
      this.body = Bodies.circle(x, y, r, options);
   
    //this.fill_color = fill_color
  
    this.image = loadImage("polygon.png");
    World.add(world, this.body);
    
  }

  display() 
  {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //super.display();
    var pos = this.body.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);  
  }

}
