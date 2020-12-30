const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


/* 
1. create a variable for the obj
2. mention that the object belong to the class --> inside the setup()
3. call the function to display() --> function draw() */ 

//1
var groundObject;
var box1, box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   //2 --> objectName = new className();
    groundObject = new GroundClass();
box1 = new boxClass(200,300,50,50);
box2 = new boxClass(240,200,50,100);

 


}

function draw(){
    background(0);
    Engine.update(engine);
    
    //3 --> objectname.functionName();
    groundObject.groundDisplay();
box1.boxDisplay();
box2.boxDisplay();

}