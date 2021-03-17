import {SampleBase} from './sampleBase.js';
export function Sample1 (){
    SampleBase.call(this);
    this._name = "FIRST";
}
Sample1.prototype = Object.create(SampleBase.prototype);
Sample1.prototype.constructor = Sample1;