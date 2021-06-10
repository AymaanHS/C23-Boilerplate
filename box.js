class Box
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:1
          }

          //this.body - It reffers to current object of this class
        this.body = Bodies.rectangle(x,y,width,height,options);
        
        this.width = width;
        this.height = height;

        World.add(myWorld,this.body);
    }
    
    display()
    {
        var boxDublicate = this.body.position;
        var boxAngle = this.body.angle;
        //push and pop are always used in pair, push applies all the properties to the object written 
        //inside push and pop only, pop reverts back to the default properties..

        push()
        translate(boxDublicate.x,boxDublicate.y)
        rotate(boxAngle)

        angleMode(RADIANS)
        fill("white");
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        
        pop()
        
    }
}

//Constructor helps to build or it helps to define the properties