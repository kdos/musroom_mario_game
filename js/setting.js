var gameCanvas = document.getElementById("gameCanvas");
var mushroomCountCard = document.getElementById("mushroomsCountCard");
var ctx = gameCanvas.getContext('2d');
var blockSize = 15; 
var w = 350;
var h = 350;
var rows=0;
var cols=0;
var mario;
var mushrooms;
var mushroomCount=3;
var steps=0;
var tolerance=3;

const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
const MARIO_COLOUR = 'lightgreen';
const MARIO_BORDER_COLOUR = 'black';
const MUSHROOM_COLOUR = 'red';


