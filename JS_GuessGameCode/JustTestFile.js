let result1 = (5 == '5');
let result2 = (5 === '5');

console.log(result1);
console.log(result2);

let score = 95;

if (score >= 90) {
    console.log('Оцінка: A');
} else if (score >= 80) {
    console.log('Оцінка: B');
} else if (score >= 70) {
    console.log('Оцінка: C');
} else {
    console.log('Оцінка: F');
}

let pass = (score >= 70) ? 'Пройшли' : 'Не пройшли';
console.log(pass);