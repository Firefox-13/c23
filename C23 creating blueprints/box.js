//create a class --> class className

class boxClass{
    //construct the mould/class
    //function setup()
constructor(x,y,width,height){
    var options ={
        isStatic: false
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

//function draw()
boxDisplay(){
    push ();
    fill ("yellow");
    translate(this.body.position.x,this.body.position.y);
    rotate (this.body.angle)
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
}