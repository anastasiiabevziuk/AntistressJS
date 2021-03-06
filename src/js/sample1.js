import {SampleBase} from './sampleBase.js';


export function Sample1 (){
    SampleBase.call(this);
    this._name = "FIRST";
    this._queue = [];
    this._addCircleDelay = 5;
    this._removeCircleDelay = 7;

    this._radius = 10;
    this._radiusTwo = 3;

    this._maxLength = 15;

    this.color = "#800080";
    this.colorTwo = "#ff00ff";

    this._mouseX = null;
    this._mouseY = null;

    this._currentDate = new Date();

    this._rainbowDt = 0;

    this._rainbowTim = null;
    
}
Sample1.prototype = Object.create(SampleBase.prototype);
Sample1.prototype.constructor = Sample1;

Sample1.prototype.createMenu = function(div){
    this.createSliderForRadius(div);
    this.createSliderForLength(div);
    this.createRainbow(div);
    this.createButtonForColor(div);
   
};
Sample1.prototype.createRainbow = function(div){
    let chboxContainer = document.createElement('div');
    chboxContainer.className = "containerForChbox";
    div.appendChild(chboxContainer);
    let chbox = this.createCheckbox(chboxContainer, "Rainbow");
    chboxContainer.insertAdjacentHTML("beforeend", ' <label>"Rainbow"</label>');
    this.drawRainbow(chbox);
};

Sample1.prototype.drawRainbow = function(chbox) {
    const self = this;
    chbox.onchange = function() {


        self._isRainbow = !self._isRainbow;
        if(document.getElementById("btn1").disabled){
            document.getElementById("btn1").disabled = false;
            document.getElementById("btn2").disabled = false;
            document.getElementById("colorCircle").disabled = false;
            document.getElementById("colorCircleTwo").disabled = false;

        }else{
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("colorCircle").disabled = true;
            document.getElementById("colorCircleTwo").disabled = true;

        }

        if(self._isRainbow) {
            self._rainbowTim = setInterval(()=> {
                self._rainbowDt += 0.1;
            }, 100);
        }
        else {
            clearInterval(self._rainbowTim);
            self._rainbowTim = null;
        }
    };
};

Sample1.prototype.createSliderForRadius = function(div){
    let slideContainer = document.createElement('div');
    slideContainer.className = "containerForSlider";
    div.appendChild(slideContainer);
    let slider = this.createSlider(slideContainer, 1, 50, this._radius);
    slideContainer.insertAdjacentHTML('beforebegin', ' <p>Choose radius 1:</p>');
    slideContainer.insertAdjacentHTML("beforeend", ' <p>Value: <span id="demo"></span></p>');
    
    let slideContainerTwo = document.createElement('div');
    slideContainerTwo.className = "containerForSlider";
    div.appendChild(slideContainerTwo);
    let sliderTwo = this.createSlider(slideContainerTwo, 1, 50, this._radiusTwo);
    slideContainerTwo.insertAdjacentHTML('beforebegin', ' <p>Choose radius 2:</p>');
    slideContainerTwo.insertAdjacentHTML("beforeend", ' <p>Value: <span id="demoTwo"></span></p>');

    this.selectRadius(slider, sliderTwo);
};
Sample1.prototype.createSliderForLength = function(div){
    let slideContainerLength = document.createElement('div');
    slideContainerLength.className = "containerForSlider";
    div.appendChild(slideContainerLength);
    let sliderLength = this.createSlider(slideContainerLength, 1, 100, this._maxLength);
    slideContainerLength.insertAdjacentHTML('beforebegin', ' <p>Choose Max Length:</p>');
    slideContainerLength.insertAdjacentHTML("beforeend", ' <p>Value: <span id="demoLegth"></span></p>');
    

    this.selectMaxLength(sliderLength);
};


Sample1.prototype.selectMaxLength = function(slider){
    let output = document.getElementById("demoLegth");
    output.innerHTML = slider.value;
    const self = this;
    slider.oninput = function() {
        output.innerHTML = this.value;
        self._maxLength = this.value;
    };
    
};

Sample1.prototype.createButtonForColor = function(div){
    let butContainer = document.createElement('div');
    butContainer.className = "containerForButton";
    div.appendChild(butContainer);
    this._color = document.createElement('input');
    this._color.type = "color";
    this._color.id = "colorCircle";
    this._color.value = this.color;
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
    this._colorTwo.value = this.colorTwo;
    this._colorTwo.className = "chooseColor";
    butContainerTwo.appendChild(this._colorTwo);
    butContainerTwo.insertAdjacentHTML("afterbegin", ' <p>Choose color 2:</p>');
    let btnTwo = this.createButton(butContainerTwo, "Confirm", "btn2");
    this.chooseColor(btn, btnTwo);
};

Sample1.prototype.chooseColor = function(btn, btnTwo){
    const self = this;
    btn.onclick = function() {
        self.color = document.getElementById("colorCircle").value;
    };
    btnTwo.onclick = function() {
        self.colorTwo = document.getElementById("colorCircleTwo").value;
    };
};


Sample1.prototype.selectRadius = function(slider, sliderTwo){
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;
    const self = this;
    slider.oninput = function() {
        output.innerHTML = this.value;
        self._radius = this.value;
    };
    let outputTwo = document.getElementById("demoTwo");
    outputTwo.innerHTML = sliderTwo.value;
    const selfTwo = this;
    sliderTwo.oninput = function() {
        outputTwo.innerHTML = this.value;
        selfTwo._radiusTwo = this.value;
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

 Sample1.prototype.resizeCanvas = function() {
    let rect =  this._canvas.parentNode.getBoundingClientRect();
    this._canvas.width = rect.width;
    this._canvas.height = rect.height;
 };
 

 Sample1.prototype.drawCircle = function(x, y, rad, color, opacity){
    this._context.globalAlpha = opacity;
    this._context.fillStyle = color;
    this._context.beginPath();   
    this._context.arc(x, y, rad , 0, 2 * Math.PI, false);
    this._context.fill();

 };

 Sample1.prototype.drawCircles =  function() {
    let counter = 0;
    //for(let i = this._queue.length - 1; i >= 0; i--) {
        for(let i = 0; i < this._queue.length; i++) {
            let k =(this._queue.length ==1) ? 1 : i / (this._queue.length - 1);
            let ob =  this._queue[i];
            let opacity = k;
            let radius =  (this._radius * k + this._radiusTwo * (1 - k) );
            counter++;
            let color = this.colorBlending(this.getColorOne(), this.getColorTwo(), k);
            this.drawCircle(ob.x, ob.y, radius, color, opacity);
        }
 };

 Sample1.prototype.initCanvasEvents = function(){
    this._canvas.onmousemove = e => this.onMouseMove(e);

    setInterval(()=>{
        this.addCircleOnTim();
    }, this._addCircleDelay );

    setInterval(()=>{
        this._prevDate = this._currentDate;
        this._currentDate = new Date();
        this.removeCircleOnTim(this._currentDate - this._prevDate);
    }, this._removeCircleDelay );




    ///TEST
    setInterval(()=>{
        if(this.testTime) {
            console.log(this.testTime);
        }
        this.testTime = 0;
    }, 1000 );
 };

 Sample1.prototype.onMouseMove = function(e){
     this._mouseX = e.offsetX;
     this._mouseY = e.offsetY;
     /*
    //this._canvas.onmousemove = e => this.findCoordinates(e);
    this.cleanCanvas(); 
    //this.drawCircle(e.offsetX, e.offsetY, 10, 'pink');
    this.addCoordToQueue(e.offsetX, e.offsetY);
    this.drawCircles();
    */

    ///TEST
    this.testTime++;
 };

 Sample1.prototype.onResize = function(e) {
    this.resizeCanvas();
 };

 Sample1.prototype.cleanCanvas = function(){
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
 };

 Sample1.prototype.addCoordToQueue =  function(a, b){
    if(this._queue.length > this._maxLength){
       this._queue.splice(0, 1);
       this._queue.push({x: a, y: b});
        
    } else {
        this._queue.push({x: a, y: b});               
    }
    
    //this.createCircles();
};

Sample1.prototype.removeCoordFromQueue =  function(num){
    if(this._queue.length > 1) {
        if(this._queue.length > num + 1) {
            this._queue.splice(0, num);
        }
        else {
            this._queue.splice(0, this._queue.length - 1);
         } 
    }
};

Sample1.prototype.addCircleOnTim = function() {
    this.addCoordToQueue(this._mouseX, this._mouseY);
    
     this.cleanCanvas(); 
     this.drawCircles();
};

Sample1.prototype.removeCircleOnTim = function(t) {
    let num = Math.round(t/this._removeCircleDelay);

    this.removeCoordFromQueue(num);
    
     this.cleanCanvas(); 
     this.drawCircles();
};

Sample1.prototype.toHex = function(n) {
    let hn = Math.round(n).toString(16);

    if(hn.length < 2) {
        return "0" + hn;
    }

    return hn;

};

Sample1.prototype.getRainbowCollor = function(k) {
    let kpi = k % (3 * Math.PI / 2);
    let kr1 = Math.max(Math.cos(kpi), 0);
    let kg = Math.max(Math.cos(kpi - Math.PI / 2), 0);
    let kb = Math.max(Math.cos(kpi - Math.PI), 0);
    let kr2 = Math.max(Math.cos(kpi - 3 * Math.PI / 2), 0);

    let color = "#" + this.toHex(kr1 * 255 + kr2 * 255) +  this.toHex(kg * 255) +  this.toHex(kb * 255);

    return color;
};

Sample1.prototype.getColorOne = function() {

   if(this._isRainbow) {
    return this.getRainbowCollor(this._rainbowDt);
   }
   else {
    return this.color;
   }
    
};

Sample1.prototype.getColorTwo = function() {

    if(this._isRainbow) {
        return this.getRainbowCollor(this._rainbowDt + Math.PI / 2);
       }
       else {
        return this.colorTwo;
       }
};

    
