export class ClassA {

    _name = "";

    constructor({ name }) {
        this._name = name;
    }

    logAName() {
        console.log(this._name);
    }
} 