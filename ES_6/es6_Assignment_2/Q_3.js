// Write a function printPersonInfo that accepts an object parameter person containing name, age, and city properties,
//  and uses object destructuring to print each property.--- DONE


// Modify the printPersonInfo function to assign default values ('Unknown') to age and city 
// if they are not provided in the person object.---DONE


// Creating an Object
let Person={
    Name: 'zoro',
    Age: 21,
    city: 'Wano'
}
// function that takes in object parameter
function printPersonInfo(Person){  
//object destructuring to access the object values 
   const{ Name, Age, city}= Person;

   console.log(`Name:${Name}`);
   console.log(`Age:${Age}`);
   console.log(`City:${city}`);
}

printPersonInfo(Person);


function printPersonInfo2(Person){

    const {Name, Age='Unknown', city='Unknown'}=Person

    console.log(`Name:${Name}`);
   console.log(`Age:${Age}`);
   console.log(`City:${city}`);
}

let Person2={
    Name:`Luffy`
}

printPersonInfo2(Person2);