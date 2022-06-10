const age = 10;
console.log(age);

// const cart = [10, 20, 25 ,37, 48];

// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {

//     total += cart[i];
// }

// console.log('Total: ', total);


// Напиши скрипт который подсчитывает сумму всех четных чисел в массиве

const numbers = [1, 5, 8, 9, 11, 12, 15, 17, 20, 23, 27, 28];

let total = 0;

// 1 способ

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         console.log('Четное!!!!!');

//         total += numbers[i];
//     }

// } 

// 2 способ 

for (const number of numbers) {
    console.log(number);

    if (number % 2 === 0) {
     console.log('Четное!!!!!');

     total += number;
    }
}


console.log('Total: ', total);

 
