class Obstcle {

    constructor()
    {
        this.size=80;
        this.x=width;
        this.y=height-this.size;
    }

    move()
    {
        this.x-=5;
    }

    show()
    {
        image(obstacleImage,this.x,this.y,this.size,this.size);
        fill(155,50)
        rect(this.x,this.y,this.size,this.size);
    }
}