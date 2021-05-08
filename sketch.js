const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time = 0;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
   };

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(35);
    fill("white");
    text("Time: "+time,width-1000,300);

}

async function getBackgroundImg(){

    // write code to fetch time from API
       var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        
        
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset

        if(hour>=01 && hour<=02){
            bg = "sunrise1.png"
            time = 1;
        }
        else if(hour>=03 && hour<=04){
            bg = "sunrise2.png";
            time = 2
        }
        else if(hour>=04 && hour<=05){
            bg = "sunrise3.png";
            time = 3
        }
        else if(hour>=05 && hour<=06){
            bg = "sunrise4.png";
            time = 4
        }
        else if(hour>=06 && hour<=07){
            bg = "sunrise5.png";
            time = 5
        }
        else if(hour>=07 && hour<=08){
            bg = "sunrise6.png";
            time = 6
        }
        else if(hour>=08 && hour<=09){
            bg = "sunset7.png";
            time = 7
        }
        else if(hour>=09 && hour<=10){
            bg = "sunset8.png";
            time = 8
        }
        else if(hour>=10 && hour<=11){
            bg = "sunset9.png";
            time = 9
        }
        else if(hour>=11 && hour<=12){
            bg = "sunset10.png";
            time = 10
        }
        else if(hour>=12 && hour<=13){
            bg = "sunset11.png";
            time = 11
        }
        else{
            bg = "sunset12.png";
            time = 12
        }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    
}
