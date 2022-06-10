
// Нахожение наибольшего числа

const numbers = [45, 95, 3, 23, 65, 77, 17, 37];
let biggestNumber = numbers[0];

for (const number of numbers) {
    if (number > biggestNumber) {
        biggestNumber = number;
    }
}

console.log('biggestNumber: ', biggestNumber);
