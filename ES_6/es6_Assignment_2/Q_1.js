// Write a JavaScript class Car with a constructor that takes make and model as parameters. Include an instance method displayInfo that logs "Make: [make],
//  Model: [model]" to the console when called.---DONE


// Create a subclass ElectricCar that extends the Car class. 
// Add a new property batteryCapacity to the ElectricCar class and override the displayInfo method to include battery information.---DONE

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}

let Car1 = new Car('Toyota', 'Camry');
Car1.displayInfo(); 


class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }
    displayInfo2() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Battery_Capacity: ${this.batteryCapacity} kWh`);
    }
}

let ElectricCar1=new ElectricCar('Tesla','x-1','100')
ElectricCar1.displayInfo2()