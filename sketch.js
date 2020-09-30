var database;
var gamestate = 0
var player,form,player_count
var game

function setup(){
    createCanvas(500,500);


    database=firebase.database();

    game=new Game()
    game.GS()
    game.start()
   
}

function draw(){

}
