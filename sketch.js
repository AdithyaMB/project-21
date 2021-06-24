var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,550,150,25);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,550,150,25);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(500,550,150,25);
    surface3.shapeColor = "blue";

    surface4 = createSprite(700,550,150,25);
    surface4.shapeColor = "green";

    box = createSprite(random(20,750),400,15,15);
    box.shapeColor = "white";
    box.velocityY = 2;
    box.velocityX = 3;


    //create box sprite and give velocity
    //createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
 
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor = "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
       box.shapeColor = "blue";
    }
                    
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
       box.shapeColor = "green";
     }




    //add condition to check if box touching surface and make it box
    drawSprites();
}
