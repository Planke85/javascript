class Animal {
    constructor(name, type, age, size, isEaten = false) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = isEaten;
    }

    eat(animal) {
        if(animal instanceof Animal) {
            if(this.type.toLowerCase() === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals!`);
            }
            else if(this.size >= animal.size * 2){
                this.isEaten = true;
                console.log(`The animal ${this.name} ate ${animal.name}.`);
            }
            else {
                console.log(`The animal ${this.name} tried to eat ${animal.name} but it was too large.`);
            }
        }
        else console.log(`The animal ${this.name} is eating ${animal}.`);
    }
}

let tigar = new Animal("Tigar", "Carnivore", 10, 200);
let cow = new Animal("Cow", "Herbivore", 1, 100);
let bear = new Animal("Bear", "Omnivore", 15, 400);
console.log(tigar);
console.log(cow);
console.log(bear);
tigar.eat(cow);
cow.eat(tigar);
bear.eat(tigar);
tigar.eat(bear);