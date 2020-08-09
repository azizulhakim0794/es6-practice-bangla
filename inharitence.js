class Parent {
    constructor(){
        this.fatherName = "Hakim"
    }
}
class Child extends Parent {

    constructor(name){
        super();
        this.name = name
    }

    getFullName(){
        return this.name + " "+ this.fatherName
    }

}
const student1 = new Child("shuvo");
const student2 = new Child("ganja");
console.log(student1.getFullName());