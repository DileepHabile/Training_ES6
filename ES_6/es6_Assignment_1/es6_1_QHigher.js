// Given an array of numbers, double each number and return the new array.
// const numbers = [1, 2, 3, 4, 5];
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);



// Print each element of an array followed by its index.
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num, index) => {
    console.log(`Element ${num} is at index ${index}`);
});



// Check if any element in an array is greater than 10. const numbers = [5, 8, 15, 3, 2];
const numbers3 = [5, 8, 15, 3, 2];
const anyGreaterThan10 = numbers3.some(num => num > 10);
console.log(anyGreaterThan10);



// Check if all elements in an array are positive. const numbers = [1, 2, 3, -4, 5];
const numbers4 = [1, 2, 3, -4, 5];
const allPositive = numbers4.every(num => num > 0);
console.log(allPositive); 



// Filter an array of numbers to get only even numbers. const numbers = [1, 2, 3, 4, 5, 6];
const numbers5 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers5.filter(num => num % 2 === 0);
console.log(evenNumbers); 
