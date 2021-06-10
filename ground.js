class Ground
{
    constructor()
    {
        var option={
            isStatic:true
          }

        this.body = Bodies.rectangle(200,390,400,10,option);
        World.add(myWorld,this.body);
    }
    
    display()
    {
        var GroundDublicate = this.body.position;
        fill("white");
        rectMode(CENTER)
        rect(GroundDublicate.x,GroundDublicate.y,400,10);
        
        
    }
}
//Constructor helps to build or it helps to define the properties