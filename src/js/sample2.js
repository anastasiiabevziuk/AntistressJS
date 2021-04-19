import {SampleBase} from './sampleBase.js';


export function Sample2 (){
    SampleBase.call(this);
    this._name = "SECOND";
    this._cellsNumberX =  30;
    this._cellsNumberY =  30;
    this._firsColor =  "#FFB6C1";
    this._secondColor =  "#7FFFD4";
    this._thirdColor = "#FF0000";
    
}
Sample2.prototype = Object.create(SampleBase.prototype);
Sample2.prototype.constructor = Sample2;

Sample2.prototype.createMenu = function(div){
    this.createSliderForColumnRow(div);
    this.createButtonForColor(div);
   
};

Sample2.prototype.createButtonForColor = function(div){
    let butContainer = document.createElement('div');
    butContainer.className = "containerForButton";
    div.appendChild(butContainer);
    this._color = document.createElement('input');
    this._color.type = "color";
    this._color.id = "colorCircle";
    this._color.value =  this._firsColor;
    this._color.className = "chooseColor";
    butContainer.appendChild(this._color);
    butContainer.insertAdjacentHTML("afterbegin", ' <p>Choose color 1:</p>');
    let btn = this.createButton(butContainer, "Confirm", "btn1");
    
    let butContainerTwo = document.createElement('div');
    butContainerTwo.className = "containerForButton";
    div.appendChild(butContainerTwo);
    this._colorTwo = document.createElement('input');
    this._colorTwo.type = "color";
    this._colorTwo.id = "colorCircleTwo";
    this._colorTwo.value =  this._secondColor;
    this._colorTwo.className = "chooseColor";
    butContainerTwo.appendChild(this._colorTwo);
    butContainerTwo.insertAdjacentHTML("afterbegin", ' <p>Choose color 2:</p>');
    let btnTwo = this.createButton(butContainerTwo, "Confirm", "btn2");

    let butContainerThree = document.createElement('div');
    butContainerThree.className = "containerForButton";
    div.appendChild(butContainerThree);
    this._colorThree = document.createElement('input');
    this._colorThree.type = "color";
    this._colorThree.id = "colorCircleThree";
    this._colorThree.value =  this._thirdColor;
    this._colorThree.className = "chooseColor";
    butContainerThree.appendChild(this._colorThree);
    butContainerThree.insertAdjacentHTML("afterbegin", ' <p>Choose color 3:</p>');
    let btnThree = this.createButton(butContainerThree, "Confirm", "btn3");
    this.chooseColor(btn, btnTwo, btnThree);
};

Sample2.prototype.chooseColor = function(btn, btnTwo, btnThree){
    const self = this;
    btn.onclick = function() {
        self._firsColor = document.getElementById("colorCircle").value;
        self.createLine ();
    };
    btnTwo.onclick = function() {
        self._secondColor = document.getElementById("colorCircleTwo").value;
        self.createLine ();
    };
    btnThree.onclick = function() {
        self._thirdColor = document.getElementById("colorCircleThree").value;
    };
};

Sample2.prototype.createSliderForColumnRow = function(div){
    let slideContainer = document.createElement('div');
    slideContainer.className = "containerForSlider";
    div.appendChild(slideContainer);
    let slider = this.createSlider(slideContainer, 1, 100, this._cellsNumberX);
    slideContainer.insertAdjacentHTML('beforebegin', ' <p>Choose the number of columns:</p>');
    slideContainer.insertAdjacentHTML("beforeend", ' <p>Value: <span id="demo"></span></p>');
    
    let slideContainerTwo = document.createElement('div');
    slideContainerTwo.className = "containerForSlider";
    div.appendChild(slideContainerTwo);
    let sliderTwo = this.createSlider(slideContainerTwo, 1, 100, this._cellsNumberY);
    slideContainerTwo.insertAdjacentHTML('beforebegin', ' <p>Choose the number of columns:</p>');
    slideContainerTwo.insertAdjacentHTML("beforeend", ' <p>Value: <span id="demoTwo"></span></p>');
    this.selectColumnsRows(slider, sliderTwo);
   
};

Sample2.prototype.selectColumnsRows = function(slider, sliderTwo){
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;
    const self = this;
    slider.oninput = function() {
        output.innerHTML = this.value;
        self._cellsNumberX = this.value;
        self.createLine ();
    };
    let outputTwo = document.getElementById("demoTwo");
    outputTwo.innerHTML = sliderTwo.value;
    const selfTwo = this;
    sliderTwo.oninput = function() {
        outputTwo.innerHTML = this.value;
        selfTwo._cellsNumberY = this.value;
        self.createLine ();
    };  
};

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
    this._canvasTwo.width = this._canvas.width;
    this._canvasTwo.height =  this._canvas.height;
    this._canvasTwo.id = "canvasTwo";

    this.createLine ();
    this.initMouseEvent();
    
}

Sample2.prototype.createLine = function(){
       let lineX = this._canvas.width / this._cellsNumberX;
       let lineY = this._canvas.height / this._cellsNumberY;
       let xPos = 0;
       for (let i = 0; i < this._cellsNumberX; i++) {  
           
           let yPos = 0;
           for (let j = 0; j < this._cellsNumberY; j++) {
               if((i + j)%2 == 0 ){
                   this._context.fillStyle = this._firsColor;
               } else {
                   this._context.fillStyle = this._secondColor;
               }
               this._context.fillRect(xPos, yPos, lineX, lineY);
               yPos +=lineY;
       } 
       xPos +=lineX;
    }
}

Sample2.prototype.createLineTwo = function(x, y){
    let lineX = this._canvasTwo.width / this._cellsNumberX;
    let lineY = this._canvasTwo.height / this._cellsNumberY;
    this._contextTwo.fillStyle =  this._thirdColor;
    this.clearCanvas();
    this._contextTwo.fillRect(lineX * Math.floor((x) / lineX),
     Math.floor((y) / lineY) * lineY, lineX, lineY);
     
     this._canvasTwo.addEventListener('mouseout', ()=> this.clearCanvas(), false);
}

Sample2.prototype.initMouseEvent = function () {
    this._canvasTwo.onmousemove = e => this.eventSquare(e);
}

Sample2.prototype.eventSquare = function (e){
    this.createLineTwo(e.offsetX, e.offsetY);
}

Sample2.prototype.clearCanvas = function(){
    this._contextTwo.clearRect(0, 0,  this._canvasTwo.width, this._canvasTwo.height);
}

