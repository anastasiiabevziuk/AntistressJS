import {SampleBase} from './sampleBase.js';
export function Sample2 (){
    SampleBase.call(this);
    this._name = "SECOND";
}
Sample2.prototype = Object.create(SampleBase.prototype);
Sample2.prototype.constructor = Sample2;