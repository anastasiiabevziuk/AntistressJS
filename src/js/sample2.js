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
    //this.initCanvasEvents();
    let rect =  this._canvas.parentNode.getBoundingClientRect();
    this._canvas.width = rect.width;
    this._canvas.height = rect.height;
 
    this._canvasTwo = document.createElement('canvas');
    this._canvas.appendChild(this._canvasTwo);
    this._contextTwo = this._canvas.getContext("2d");
    //this.initCanvasEvents();
    //let rectTwo =  this._canvasTwo.parentNode.getBoundingClientRect();
    this._canvasTwo.width = this._canvas.width;
    this._canvasTwo.height = this._canvas.height;

    this.createLine ();
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

