export function Antistress(){
    this._divMenu = document.getElementsByClassName("navbar")[0];

} 
Antistress.prototype.addSample = function(sample) {
    this._createButton(sample.getName());
    //console.log(sample.getName());
};
Antistress.prototype._createButton = function(name) {
    let buttons = document.createElement('input');
    this._divMenu.appendChild(buttons);
    buttons.type = "button";
    buttons.value = name;
};