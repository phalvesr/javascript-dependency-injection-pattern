import { ClassA } from "./class-a.js"
import { ClassB } from "./class-b.js"

export const DependencyInjectionContainer = {
    a: new ClassA({name: "My name is class A"}),
    b: new ClassB({ name: "My name is class B" })
}