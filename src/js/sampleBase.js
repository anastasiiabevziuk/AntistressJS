export function SampleBase (){
    this._name = "not defined";
}
SampleBase.prototype.getName = function(){
    return this._name;
};
