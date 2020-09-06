var database;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var form;
var player;
var game;
var car1;
var car2;
var car3;
var car4;
var cars;

function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    if(playerCount === 4){
        game.updateState(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }


    drawSprites();
}

