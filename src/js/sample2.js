import {SampleBase} from './sampleBase.js';


export function Sample2 (){
    SampleBase.call(this);
    this._name = "SECOND";
   
    
}
Sample2.prototype = Object.create(SampleBase.prototype);
Sample2.prototype.constructor = Sample2;

Sample2.prototype.createCanvas = function(div) {
    this._canvas = document.createElement('canvas');
    div.appendChild(this._canvas);
    this._context = this._canvas.getContext("2d");
    this._canvas.id = "canvasOne";
    
    

    let rect =  this._canvas.parentNode.getBoundingClientRect();
    this._canvas.width = rect.width;
    this._canvas.height = rect.height;
 
    this._canvasTwo = document.createElement('canvas');
    div.appendChild(this._canvasTwo);
    this._contextTwo = this._canvasTwo.getContext("2d");
    //let rect2 =  this._canvasTwo.parentNode.getBoundingClientRect();
    this._canvasTwo.width = this._canvas.width;
    this._canvasTwo.height =  this._canvas.height;
    this._canvasTwo.id = "canvasTwo";

    this.createLine ();
    this.initMouseEvent();
    
}



Sample2.prototype.createLine = function(){
    
       this.firsColor =  "red";
       this.secondColor =  "pink";
       this.cellsNumberX =  10;
       this.cellsNumberY = 10;
       let lineX = this._canvas.width / this.cellsNumberX;
       let lineY = this._canvas.height / this.cellsNumberY;
       let xPos = 0;
       for (let i = 0; i < this.cellsNumberX; i++) {  
           
           let yPos = 0;
           for (let j = 0; j < this.cellsNumberY; j++) {
               if((i + j)%2 == 0 ){
                   this._context.fillStyle = this.firsColor;
               } else {
                   this._context.fillStyle = this.secondColor;
               }

              
               this._context.fillRect(xPos, yPos, lineX, lineY);
               yPos +=lineY;
       } 
       xPos +=lineX;
       
    }
    
}
Sample2.prototype.createLineTwo = function(x, y){
    this.thirdColor = "green";
    this.cellsNumberX =  10;
    this.cellsNumberY = 10;
    let lineX = this._canvasTwo.width / this.cellsNumberX;
    let lineY = this._canvasTwo.height / this.cellsNumberY;
    this._contextTwo.fillStyle =  this.thirdColor;
    this.clearCanvas();
    this._contextTwo.fillRect(lineX * Math.floor((x) / lineX),
     Math.floor((y) / lineY) * lineY, lineX, lineY);
     
     this._canvasTwo.addEventListener('mouseout', ()=> this.clearCanvas(), false);
}
Sample2.prototype.initMouseEvent = function () {
    this._canvasTwo.onmousemove = e => this.eventSquare(e);
}

Sample2.prototype.eventSquare = function (e){
    console.log(e.offsetX, e.offsetY);
    this.createLineTwo(e.offsetX, e.offsetY);
}



Sample2.prototype.clearCanvas = function(){
    this._contextTwo.clearRect(0, 0,  this._canvasTwo.width, this._canvasTwo.height);
}

/*let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
    canvas.width = window.innerWidth/1.25;
    canvas.height = window.innerHeight ;
let canvasTwo = document.getElementById("canvasTwo");
let contextTwo = canvasTwo.getContext("2d");
    canvasTwo.width = window.innerWidth/1.25;
    canvasTwo.height = window.innerHeight ;
let numberX =  document.getElementById("rows");
let numberY = document.getElementById("columns");
let cellsNumberX =  numberX.value;
let cellsNumberY = numberY.value;


let firsColor =  document.getElementById("firstColor").value;
let secondColor =  document.getElementById("secondColor").value;
let thirdColor =  document.getElementById("thirdColor").value;


let grid = {

   init: function(){
       this.createLine();
   },

   createLine: function(x, y){
      
       let lineX = this.canvasWidth / this.cellsNumberX;
       let lineY = this.canvasHeight / this.cellsNumberY;
       let xPos = 0;
       for (let i = 0; i < this.cellsNumberX; i++) {  
           
           let yPos = 0;
           for (let j = 0; j < this.cellsNumberY; j++) {
               if((i + j)%2 == 0 ){
                   this.context.fillStyle = this.firsColor;
               } else {
                   this.context.fillStyle = this.secondColor;
               }

              
               this.context.fillRect(xPos, yPos, lineX, lineY);
               yPos +=lineY;
          
       } 
       xPos +=lineX;
   }  
       

   },

   cellsNumberX,

   cellsNumberY,

   canvasTwo,

   context,

   canvasWidth: canvas.width,

   canvasHeight: canvas.height,

   firsColor,

   secondColor,

}




let square = {

   init: function(){
       this.initMouseEvent();

   },
   initMouseEvent : function () {
       this.canvasTwo.onmousemove = e => this.eventSquare(e);
   },

   eventSquare: function (e){
       this.createLine(e.offsetX, e.offsetY);
   },

   createLine: function(x, y){
       let lineX = this.canvasWidth / this.cellsNumberX;
       let lineY = this.canvasHeight / this.cellsNumberY;
       this.contextTwo.fillStyle =  this.thirdColor;
       this.clearCanvas();
       this.contextTwo.fillRect(lineX * Math.floor((x) / lineX),
        Math.floor((y) / lineY) * lineY, lineX, lineY);
        
        this.canvasTwo.addEventListener('mouseout', ()=> this.clearCanvas(), false);
   },

   clearCanvas:  function(){
       this.contextTwo.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
   },

   canvasWidth: canvas.width,

   canvasHeight: canvas.height,

   cellsNumberX,

   cellsNumberY,

   canvasTwo,

   contextTwo,

   thirdColor,
}
numberX.oninput = function() {
   grid.cellsNumberX =  numberX.value;
   square.cellsNumberX =  numberX.value;


   grid.init();
   square.init();

}
numberY.oninput = function() {
   grid.cellsNumberY =  numberY.value;
   square.cellsNumberY =  numberY.value;

   grid.init();
   square.init();

}

function changeColors() {
   grid.firsColor =  document.getElementById("firstColor").value;
   grid.secondColor =  document.getElementById("secondColor").value;
   square.thirdColor =  document.getElementById("thirdColor").value;

   grid.init();
   square.init();

}
grid.init();
square.init();*/