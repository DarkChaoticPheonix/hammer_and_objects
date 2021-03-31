const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(400,400,21,21);
    rubber2 = new Rubber(425,400,21,21);
    rubber3 = new Rubber(447,400,21,21);
    rubber4 = new Rubber(470,400,21,21);
    stone1 = new Stone(520,300,50,70);
    stone2 = new Stone(520,360,50,70);
    iron1 = new Iron(600,300,60,60);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    stone1.display();
    stone2.display();
    iron1.display();
}