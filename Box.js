class Box extends BaseClass 
{
  constructor(x, y, width, height, fill_color)
  {
    super (x, y, width, height, fill_color, 0);
    this.Visiblity = 255;
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/wood1.png");
  }

  display()
  {
    //console.log(this.body.speed);
    if (this.body.speed < 3)
    {
     super.display();
    }
    else
    {
      var pos = this.body.position;
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;      
      rectMode(CENTER);
      //fill(this.fill_color);
      tint(255,this.Visiblity);
      //rect(pos.x, pos.y, this.width, this.height);
      //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }

}
