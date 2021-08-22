let jerry;
let bgImage;
let playerImage;
let obstacleImage;
let cheese=[];
let soundClassifier;

function preload(){
  const options={probabilityThresholds: 0.95};
  soundClassifier=ml5.soundClassifier('SpeechCommands18w',options)
  bgImage = loadImage("bg.jpg");
  playerImage = loadImage("jj.gif");
  obstacleImage = loadImage("cheese.png");
}


function setup() {
  createCanvas(1000, 500);
  jerry=new Player()
  soundClassifier.classify(gotCommand);
}

function gotCommand(error,results)
{
  if(error)
  {
    console.error(error);
  }
  console.log(results[0].label ,results[0].confidence);
    if(results[0].label=='up')
    {
      jerry.jump();
    } 
  
}


function keyPressed()
{
  if(key==" ")
  {
    jerry.jump();
  }
}


function draw() {
  if(random(1)<0.01)
  {
    cheese.push(new Obstcle());
  }

  background(bgImage);
  
  for(let t of cheese)
  {
    t.move();
    t.show();
    if(jerry.hits(t)){
      alert("Game - Over");
      noLoop();
    }

  }


  jerry.show();
  jerry.move();

}