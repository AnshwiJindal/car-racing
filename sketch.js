var database;
var position;
var GameState=0
var PlayerCount=0
var distance=0
var AllPlayers;
var player,form,game

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  game=new Game();
  
  game.GetState();
  game.Start()
}

function draw(){
  background("white");
  if(PlayerCount===4){
    game.Update(1)
  }
    


  if(GameState===1){
    clear();
    game.Play()
  }
}

