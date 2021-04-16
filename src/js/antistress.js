export function Antistress(){
    this._divMenu = document.getElementsByClassName("navbar")[0];
    this._divCanvas = document.getElementsByClassName("container")[0];
    this._divContainerMenu = document.getElementsByClassName("menu")[0];
    
    window.onresize = e => this.onResize(e);

} 

Antistress.prototype.addSample = function(sample) {
    const self = this;

    if(this._currentSample == undefined) {
        this._currentSample = sample;
    }
    let button = this._createButton(sample.getName());


    button.onclick = () => {
        self._clean();
        self._currentSample = sample;
        sample.createCanvas(self._divCanvas);
        sample.createMenu(self._divContainerMenu);
        
    };
    this._divMenu.appendChild(button);
    //init();
    sample.createCanvas(this._divCanvas);
    sample.createMenu(this._divContainerMenu);
};

Antistress.prototype._createButton = function(name) {
    let button = document.createElement('input');
    button.type = "button";
    button.value = name;
    return button;
};


Antistress.prototype.onResize = function(e) {
    this._currentSample.onResize(e);
};

Antistress.prototype._clean = function() {
    this._divCanvas.innerHTML = '';
    this._divContainerMenu.innerHTML = '';
} 