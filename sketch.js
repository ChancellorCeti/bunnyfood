var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;
  var select_sprites = Math.round(random(1,2));
  if (frameCount % 40 == 0){
    if (select_sprites == 1){
      createApples();
    }
    else{
      createLeaves();
    }
    
    }
  drawSprites();
}

function createApples(){
   var apple = createSprite(random(50,350),40,10,10);
   apple.addImage(appleImg);
   apple.velocityY=4;
   apple.lifetime=90;
  apple.scale=.1;
}
function createLeaves(){
  var leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY=4;
  leaf.lifetime=90;
  leaf.scale=.1;
}

