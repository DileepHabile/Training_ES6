
// Write a function getRemainingProperties that extracts the name property from an object and gathers
//  all remaining properties into a new object using object destructuring and the rest syntax (...).


function getRemainingProperties(Obj){
    const {name, ...remainingProperties}= Obj
    return remainingProperties;
}


let person={
    name:'Eren',
    age:21,
    place:'Paradise'
}

let remain=getRemainingProperties(person);
console.log(remain);
