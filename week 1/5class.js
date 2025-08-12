class Animal{
    constructor(name, gender, speaks){
        this.name = name;
        this.gender = gender;
        this.speaks = speaks;
    }
    speak(){
        console.log(`the ${this.name} ${this.speaks}s`);
    }
}
let dog = new Animal("dawg", "male", "bark");
dog.speak();