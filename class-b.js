export class ClassB {

    _name = "";
    
    constructor({ name }) {
        this._name = name;
    }

    logBName() {
        console.log(this._name);
    }
}