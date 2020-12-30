//create a class --> class className

class GroundClass{
    //construct the mould/class
    //function setup()
constructor(){
    var options ={
        isStatic: true
    }

    this.body = Bodies.rectangle(200,390,400,20,options);
    this.width = 400;
    this.height = 20;
    World.add(world,this.body);
}

//function draw()
groundDisplay(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}