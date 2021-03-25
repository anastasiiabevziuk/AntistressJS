import {SampleBase} from './sampleBase.js';
export function Sample1 (){
    SampleBase.call(this);
    this._name = "FIRST";
    this._queue = [];
    this._delay = 25;
    this._radius = 10;
}
Sample1.prototype = Object.create(SampleBase.prototype);
Sample1.prototype.constructor = Sample1;

Sample1.prototype.createMenu = function(div){
    this.createSliderForRadius(div);
    this.createButtonForColor(div);
};

Sample1.prototype.createSliderForRadius = function(div){
    let slideContainer = document.createElement('div');
    slideContainer.className = "containerForSlider";
    div.appendChild(slideContainer);
    let slider = this.createSlider(slideContainer, 1, 50, this._radius);
    //this._slider = document.createElement('input');
    //this._slider.type = "range";
    //this._slider.min = "1";
    //this._slider.max = "50";
   // this._slider.value = "10";
    //this._slider.className = "slider";
    //slideContainer.appendChild(this._slider);
    slideContainer.insertAdjacentHTML('beforebegin', ' <p>Choose radius:</p>');
    slideContainer.insertAdjacentHTML("beforeend", ' <p>Value: <span id="demo"></span></p>');
    this.selectRadius(slider);
    
};

Sample1.prototype.createButtonForColor = function(div){
    let butContainer = document.createElement('div');
    butContainer.className = "containerForButton";
    div.appendChild(butContainer);
    this._color = document.createElement('input');
    this._color.type = "color";
    this._color.id = "colorCircle";
    this._color.className = "chooseColor";
    butContainer.appendChild(this._color);
    butContainer.insertAdjacentHTML("afterbegin", ' <p>Choose color:</p>');
    let btn = this.createButton(butContainer, "Confirm");
    this.chooseColor(btn);
};

Sample1.prototype.chooseColor = function(btn){
    const self = this;
    btn.onclick = function() {
        self.color = document.getElementById("colorCircle").value;
    };
};


Sample1.prototype.selectRadius = function(slider){
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;
    const self = this;
    slider.oninput = function() {
    output.innerHTML = this.value;
    self._radius = this.value;
    };
};

Sample1.prototype.createCanvas = function(div){
    this._canvas = document.createElement('canvas');
    //this._canvas.width = div.offsetWidth; // TODO: get from flex
    //this._canvas.height = div.offsetWidth;
    //this._canvas.style.width ='100%';
   
    div.appendChild(this._canvas);

    this._context = this._canvas.getContext("2d");
    this.initCanvasEvents();

    let rect =  this._canvas.parentNode.getBoundingClientRect();
    this._canvas.width = rect.width;
    this._canvas.height = rect.height;
 }; 

 

 Sample1.prototype.drawCircle = function(x, y, rad, color){
    
    
    //context.globalAlpha = c;
    this._context.fillStyle = color;
    this._context.beginPath();   
    this._context.arc(x, y, rad , 0, 2 * Math.PI, false);
    this._context.fill();

 };

 Sample1.prototype.drawCircles =  function() {
    let counter = 0;
    for(let i = this._queue.length - 1; i >= 0; i--) {
        let ob =  this._queue[i]; 
        //let clarity =  (this.maxLengthQueue - counter)/this.maxLengthQueue;
        counter++;
        this.drawCircle(ob.x, ob.y,  this._radius, this.color);
    }
 };

 Sample1.prototype.initCanvasEvents = function(){
    this._canvas.onmousemove = e => this.onMouseMove(e);
    setInterval(()=>{this.deleteCircleOnTim();}, this._delay);
 };

 Sample1.prototype.onMouseMove = function(e){
    //this._canvas.onmousemove = e => this.findCoordinates(e);
    this.cleanCanvas(); 
    //this.drawCircle(e.offsetX, e.offsetY, 10, 'pink');
    this.addCoordToQueue(e.offsetX, e.offsetY);
    this.drawCircles();
 };

 Sample1.prototype.cleanCanvas = function(){
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
 };

 Sample1.prototype.addCoordToQueue =  function(a, b){
    if(this._queue.length > this.maxLengthQueue){
       this._queue.splice(0, 1);
       this._queue.push({x: a, y: b});
        
    } else {
        this._queue.push({x: a, y: b});               
    }
    
    //this.createCircles();
};

Sample1.prototype.deleteCircleOnTim = function() {
    if(this._queue.length > 1){
        this._queue.splice(0, 1);
     } 
     this.cleanCanvas(); 
     this.drawCircles();
};
