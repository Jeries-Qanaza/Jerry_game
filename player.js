class Player
{
  constructor()
  {
    this.size=80;
    this.x=this.size;
    this.y=height-this.size;
    this.velocityY=0
    this.gravity=0.7  
  }

      show()
      {
        image(playerImage,this.x,this.y,this.size,this.size);
      }

      jump()
      {
        if(this.y==(height-this.size-20))
        {

          this.velocityY=-20;
        }
      }

      move()
      {
        this.y+=this.velocityY;
        this.velocityY+=this.gravity;
        this.y=constrain(this.y,0,height-this.size-20);
      }

      hits(obst)
      {
          // Center x and y for the player
          let x1 = this.x + this.size * 0.5;
          let y1 = this.y + this.size * 0.5;
          // Center x and y for the obstacle
          let x2 = obst.x + obst.size * 0.5;
          let y2 = obst.y + obst.size * 0.5;
          let isColliding =  collideCircleCircle(x1, y1, this.size, x2, y2, obst.size);
          return isColliding;
        
      
      }

}