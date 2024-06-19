class Animal{
    
    constructor(name){
        this.name= name
        console.log(`${this.name} is created.`);
        
    }

    eats(){
        console.log('eating...');
    }

    jumps(){
        console.log('hooooppping!!!');
        
    }

    static age(){
        console.log(12);
        
    }

    // getter and setters -- get or set a property
    // get name(){} 
    // set name(value) {} 
}

class WaterAnimal extends Animal{
    constructor(name){
        super(name)      // calling parent's constructor

    }

    jumps(){             // method overriding
        super.jumps()                        // we can also call parent method
        console.log('Swiming...');
    }
}

let dog = new Animal("Pepsi")
dog.eats()

let whale = new WaterAnimal
whale.jumps()

// static function called drtly by class
Animal.age()
WaterAnimal.age()

console.log(whale instanceof Animal)