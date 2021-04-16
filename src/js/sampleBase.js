export function SampleBase (){
    this._name = "not defined";
}
SampleBase.prototype.getName = function(){
    return this._name;
};

SampleBase.prototype.createCanvas = function(div) {};
SampleBase.prototype.createMenu = function(div) {};



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
SampleBase.prototype.createCheckbox = function(div, name, id){
    let chbox = document.createElement('input');
    chbox.type = "checkbox";
    chbox.value = name;
    chbox.className = "checkmark";
    if(id != undefined) {
        chbox.id = id;
    }
    div.appendChild(chbox);
    return chbox;
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

SampleBase.prototype.colorBlending= function(colorOne, colorTwo, k) {
    let r1 = parseInt(colorOne.slice(1, 3), 16);
    let g1 = parseInt(colorOne.slice(3, 5), 16);
    let b1 = parseInt(colorOne.slice(5, 7), 16);

    let r2 = parseInt(colorTwo.slice(1, 3), 16);
    let g2 = parseInt(colorTwo.slice(3, 5), 16);
    let b2 = parseInt(colorTwo.slice(5, 7), 16);

    let rb = r1 * k + r2 * (1 - k);
    let gb = g1 * k + g2 * (1 - k);
    let bb = b1 * k + b2 * (1 - k);

    let blendedColor = "rgb(" + rb + ", " + gb + ", " + bb + ")";

    return blendedColor;
};

SampleBase.prototype.onResize = function() {};