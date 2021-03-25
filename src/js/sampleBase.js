export function SampleBase (){
    this._name = "not defined";
}
SampleBase.prototype.getName = function(){
    return this._name;
};

SampleBase.prototype.createCanvas = function() {};
SampleBase.prototype.createMenu = function() {};


SampleBase.prototype.createButton = function(div, name, id){
    let btn = document.createElement('button');
    btn.innerHTML = name;
    btn.className = "buttColor";
    if(id != undefined) {
        btn.id = id;
    }
    div.appendChild(btn);
    return btn;
};

SampleBase.prototype.createSlider = function(div, min, max, value){
    let slider = document.createElement('input');
    slider.type = "range";
    slider.min = min;
    slider.max = max;
    slider.value = value;
    slider.className = "slider";
    div.appendChild(slider);
    return slider;
    
};