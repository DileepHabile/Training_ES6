
// Create a function updatePersonInfo that updates the name property of a person object 
// using object destructuring and the spread operator, leaving other properties unchanged.
 
let person={
    name:'Eren',
    age:'19',
    place:'Paradise'
}

function updatePerson(Obj){

    const {name, ...RemainingProperties}=Obj;
     
    const updatedPerson={
        name:'Zoro',
        ...RemainingProperties
    }
    return updatedPerson
}

console.log(updatePerson(person))