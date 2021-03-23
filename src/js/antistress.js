export function Antistress(){
    this._divMenu = document.getElementsByClassName("navbar")[0];
    this._divCanvas = document.getElementsByClassName("container")[0];

} 
Antistress.prototype.addSample = function(sample) {
    this._divMenu.appendChild(this._createButton(sample.getName()));
    sample.createCanvas(this._divCanvas);
    //console.log(sample.getName());
};
Antistress.prototype._createButton = function(name) {
    let button = document.createElement('input');
    button.type = "button";
    button.value = name;
    return button;
};