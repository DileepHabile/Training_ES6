// Write a function mergeObjects that takes two objects as parameters and merges them using the spread operator (...). If there are duplicate keys, 
// the second object should overwrite the first.
function mergeObjects(Obj1,Obj2){
    return {...Obj1, ...Obj2}
}

let Obj1={x:1,y:2}
let Obj2={y:4,z:3}

let mergeObj=mergeObjects(Obj1,Obj2)

console.log(mergeObj)