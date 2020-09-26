//Create variables here
var dog, happyDog, database, foodS,foodstock
var dogImg1, dogImg2
function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png")
  dogImg2 = loadImage("dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(100,100,50,50)
  dog.addImage("dog",dogImg1)
  
}


function draw() {  

  drawSprites();
  //add styles here

}



