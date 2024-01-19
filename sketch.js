//to define the variables
var galaxy, galaxyImg;
var universe, bgImg;
var solarSystem, solarSystemIMG;
var button;
var stars, starImg;
var blackHole, blackHole_Img;
var coding, codingImg;
var astronomyHistory, historyImg;
var bgMusic;
var gameState = 0;
var test;


function preload(){

  //to load the images and the sound
  galaxyImg = loadImage("Images/galaxyImg.png");
  bgImg = loadImage("Images/universe.png");
  solarSystemIMG = loadImage("Images/solarSystem.png");
  starImg = loadImage("Images/stars.jpg");
  blackHole_Img = loadImage("Images/blackHole.png");
  codingImg = loadImage("Images/codingImg.jpg");
  historyImg = loadImage("Images/astronomyHistory.jpg");
  bgMusic = loadSound("backgroundMusic.mp3");

}

function setup(){

  //to create the canvas according to the display width and height
  createCanvas(displayWidth, displayHeight); 

  //to create the sprites and add properties to them
  test = createSprite(displayWidth/2, displayHeight/2, 500, 500);
  test.visible = false;

  universe = createSprite(displayWidth/2, displayHeight/2, 1000, 1000);
  universe.addImage(bgImg);
  universe.scale = 2.7;
  

  galaxy = createSprite(test.x - 600, test.y - 240, 102, 100);
  galaxy.addImage(galaxyImg);
  galaxy.scale = 1.3;
  galaxy.visible = false;

  solarSystem = createSprite(test.x + 570, test.y - 240, 102, 100);
  solarSystem.addImage(solarSystemIMG);
  solarSystem.scale = 1;
  solarSystem.visible = false;

  stars = createSprite(test.x, test.y - 300, 102, 100);
  stars.addImage(starImg);
  stars.scale = 0.4;
  stars.visible = false;
  
  blackHole = createSprite(test.x - 600, test.y + 300, 102, 100);
  blackHole.addImage(blackHole_Img);
  blackHole.scale = 0.9;
  blackHole.visible = false;

  astronomyHistory = createSprite(test.x + 600, test.y + 330, 102, 100);
  astronomyHistory.addImage(historyImg)
  astronomyHistory.scale = 2.4;
  astronomyHistory.visible = false;
  
  coding = createSprite(test.x - 600, test.y, 102, 100);
  coding.addImage(codingImg);
  coding.scale = 0.9;
  coding.visible = false;

  //to create an object of the button class
  button = new Buttons();

 
  
}

function draw(){

  //to set the background as white
  background("white");

  //to display the button object created
  button.display();

  //to display the ending text according to the visibility of the last image
  if(coding.visible === true){

    document.getElementById('endText').style.display = 'block';
  }
  else{

    document.getElementById('endText').style.display = 'none';
  }

  //to call the functions
  speeds();
  displayLinks();
  displayTexts();

  //to display the sprites
  drawSprites();
}

//to define a function related to the velocity of the sprites
function speeds(){


  //to change the velocity according to the position of the sprites. 
  //the position of test = displayWidth/2 and displayHeight/2
  if(galaxy.x == test.x){

    galaxy.velocityX = 0;
    galaxy.velocityY = 5;
  }

  if(galaxy.y == test.y){

    galaxy.velocityY = 0;
  }

  
  if(stars.y == test.y){

    stars.velocityY = 0;
  }

  if(blackHole.y == test.y){

    blackHole.velocityY = 0;
    blackHole.velocityX = 5;
    
  }

  if(blackHole.x == test.x){

    blackHole.velocityX = 0;
  }

  if(coding.x == test.x){

    coding.velocityX = 0;

  }

  if(astronomyHistory.x == test.x){

    astronomyHistory.velocityX = 0;
    astronomyHistory.velocityY = -5;
  }

  if(astronomyHistory.y == test.y){

    astronomyHistory.velocityY = 0;
  }

  if(solarSystem.x == displayWidth/2){

    solarSystem.velocityX = 0;
    solarSystem.velocityY = 5;
  }

  if(solarSystem.y == displayHeight/2){

    solarSystem.velocityY = 0;
    solarSystem.velocityX = 0;
  }

  //to show the introduction text based on the gamestate. 
  //gamestate will change to one if the start button is clicked

  if(gameState === 0){

    document.getElementById('introText').style.display = 'block';
  }

  else{

    document.getElementById('introText').style.display = 'none';
  }
}


//to define a function to show the links taking to the detailed web pages

function displayLinks(){

  //Initially, no links will show

    document.getElementById('galaxyLink').style.display = 'none';
    document.getElementById('starsLink').style.display = 'none';
    document.getElementById('blackholeLink').style.display = 'none';
    document.getElementById('historyLink').style.display = 'none';
    document.getElementById('solarsystemLink').style.display = 'none';
    document.getElementById('codingLink').style.display = 'none';
  
    //to change the visibility of the links according to the visibility of the sprites
  if(galaxy.visible === true){

    document.getElementById('galaxyLink').style.display = 'block';
    document.getElementById('starsLink').style.display = 'none';
    document.getElementById('blackholeLink').style.display = 'none';
    document.getElementById('historyLink').style.display = 'none';
    document.getElementById('solarsystemLink').style.display = 'none';
    document.getElementById('codingLink').style.display = 'none';

  } 

  if(solarSystem.visible === true){

    document.getElementById('solarsystemLink').style.display = 'block';
    document.getElementById('galaxyLink').style.display = 'block';
    document.getElementById('starsLink').style.display = 'none';
    document.getElementById('blackholeLink').style.display = 'none';
    document.getElementById('historyLink').style.display = 'none';
    document.getElementById('codingLink').style.display = 'none';
    
    
  }


  if(stars.visible === true){

    document.getElementById('starsLink').style.display = 'block';
    document.getElementById('galaxyLink').style.display = 'block';
    document.getElementById('solarsystemLink').style.display = 'block';
    document.getElementById('blackholeLink').style.display = 'none';
    document.getElementById('historyLink').style.display = 'none';
    document.getElementById('codingLink').style.display = 'none';
    

  }  

  if(blackHole.visible === true){

    document.getElementById('blackholeLink').style.display = 'block';
    document.getElementById('galaxyLink').style.display = 'block';
    document.getElementById('solarsystemLink').style.display = 'block';
    document.getElementById('starsLink').style.display = 'block';
    document.getElementById('historyLink').style.display = 'none';
    document.getElementById('codingLink').style.display = 'none';
  }

  
  if(astronomyHistory.visible === true){

    document.getElementById('historyLink').style.display = 'block';
    document.getElementById('galaxyLink').style.display = 'block';
    document.getElementById('starsLink').style.display = 'block';
    document.getElementById('solarsystemLink').style.display = 'block';
    document.getElementById('blackholeLink').style.display = 'block';
    document.getElementById('codingLink').style.display = 'none';

  }


 

  if(coding.visible === true){

    document.getElementById('codingLink').style.display = 'block';
    document.getElementById('historyLink').style.display = 'block';
    document.getElementById('galaxyLink').style.display = 'block';
    document.getElementById('starsLink').style.display = 'block';
    document.getElementById('solarsystemLink').style.display = 'block';
    document.getElementById('blackholeLink').style.display = 'block';
    
  }
 
}

//to define a function to show the text for support

function displayTexts(){


  //to change the visibility of the text according to the visibility of the sprite
  if(galaxy.visible === true){

    document.getElementById('galaxyText').style.display = 'block';
  }

  else{

    document.getElementById('galaxyText').style.display = 'none';
  }

  if(solarSystem.visible === true){

    document.getElementById('solarsystemText').style.display = 'block';
    document.getElementById('galaxyText').style.display = 'none';
  }

  else{

    document.getElementById('solarsystemText').style.display = 'none';

  }

  if(stars.visible === true){

    document.getElementById('starsText').style.display = 'block';
    document.getElementById('solarsystemText').style.display = 'none';
  }

  else{
    document.getElementById('starsText').style.display = 'none';

  }

  if(blackHole.visible === true){

    document.getElementById('blackholeText').style.display = 'block';
    document.getElementById('starsText').style.display = 'none';

  }

  else{

    document.getElementById('blackholeText').style.display = 'none';

  }

  if(astronomyHistory.visible === true){

    document.getElementById('historyText').style.display = 'block';
    document.getElementById('blackholeText').style.display = 'none';

  }

  else{

    document.getElementById('historyText').style.display = 'none';

  }

  if(coding.visible === true){

    document.getElementById('codingText').style.display = 'block';
    document.getElementById('historyText').style.display = 'none';

  }

  else{

    document.getElementById('codingText').style.display = 'none';
  }
}