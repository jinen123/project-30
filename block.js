class Block extends Base
{
    constructor(x,y)
    {
    super(x,y,30,30)
    
  
    this.Visibility = 255
    World.add(world, this.body);
  
  }
  display(){
    if(this.body.speed < 3)
    {
      super.display();
    }
     else {
      World.remove(world,this.body)
       push()
       this.Visibility = this.Visibility - 5
       tint(255,this.Visibility)     
       pop()
     }

 
    
  }
};