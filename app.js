import { DependencyInjectionContainer } from "./DependencyInjectionContainer.js";


class Test {
    constructor({ a, b }) {
        
        a.logAName();
        b.logBName();
    }
}

new Test(DependencyInjectionContainer);
