// Create a Engine class with methods start and stop.
// Modify the Car class to include an instance of Engine and delegate the start and stop methods to it.
// -- DONE

class Engine {
    start(){
        console.log('Engine started')
    }

    stop(){
        console.log('Engine stopped')
    }
}

class car{
    constructor(make,model){
        this.make1=make
        this.model1=model
        this.Engine1=new Engine
    }

     start(){
        this.Engine1.start() 
        // creating an instance method and extracting the method of the main
        // class in it

     }

     stop(){
        this.Engine1.stop()
        // same as above
     }
    display_Info(){
        console.log(`Make:${this.make1},Model:${this.model1}`)
    }
}

let carEngine= new car('MG','Hector')


carEngine.start();
carEngine.stop();

