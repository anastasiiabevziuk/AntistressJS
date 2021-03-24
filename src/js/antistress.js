export function Antistress(){
    this._divMenu = document.getElementsByClassName("navbar")[0];
    this._divCanvas = document.getElementsByClassName("container")[0];
    this._divContainerMenu = document.getElementsByClassName("menu")[0];

} 
Antistress.prototype.addSample = function(sample) {
    this._divMenu.appendChild(this._createButton(sample.getName()));
    sample.createCanvas(this._divCanvas);
    sample.createMenu(this._divContainerMenu);
};
Antistress.prototype._createButton = function(name) {
    let button = document.createElement('input');
    button.type = "button";
    button.value = name;
    return button;
};