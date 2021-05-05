
function preload() {
    //load the images here
    gardenimg= loadImage("images/garden.png")
    toming1 = loadImage("images/cat1.png")
    toming2 = loadAnimation("images/cat2.png", "images/cat3.png")
    tom3 = loadImage("images/cat4.png")
    jerryimg = loadImage("images/mouse1.png")
    jerryimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    jerryimg3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600)
    tom.addImage(toming1)
    tom.scale = 0.2
    jerry =createSprite(200, 600)
    jerry.addImage(jerryimg)
    jerry.scale = 0.15

}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width/2)){
        tom.velocityX=0
        tom.x = 300
        tom.addImage(tom3)
        jerry.addImage(jerryimg3)
    }
    drawSprites();
}


function keyPressed(){
if (keyCode ===LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("tom running", toming2)
    jerry.addAnimation("jerry teasing", jerryimg2)
}
  //For moving and changing animation write code here


}
