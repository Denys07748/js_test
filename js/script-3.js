// Выполнение инверсии региста

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    // 1 способ

    // if (letter === letter.toLowerCase()) {
    //     console.log('Эта буква в нижнем регистре - ', letter);

    //     invertedString += letter.toUpperCase();
    // } else {
    //     console.log('Эта буква в верхнем регистре - ', letter);
    //     invertedString += letter.toLowerCase();
    // }



    // 2 способ

    invertedString += 
    letter === letter.toLowerCase() 
    ? letter.toUpperCase() 
    : letter.toLowerCase();
}

 console.log('invertedString: ', invertedString);


//  Делаем slug в URL  из названия статьи
// Заголовок состоит только из букв и пробелов

const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

const slug = title.toLowerCase().split(' ').join('-');

console.log(slug);


// Напиши скрипткоторый считает сумму элементов двух массивов

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
    total += number;
}

console.log(total);