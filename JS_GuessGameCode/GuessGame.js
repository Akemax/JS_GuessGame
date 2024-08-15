const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playGame() {
    const randomNumber = Math.floor(Math.random() * 101); // Загаданное число от 0 до 100
    let attempts = 10; // Количество попыток
    let previousGuesses = [];

    console.log("Игра 'Угадай число'. Загадано число от 0 до 100. У вас есть 10 попыток, чтобы его угадать.");

    function askGuess() {
        if (attempts > 0) {
            rl.question('Введите ваше предположение: ', (input) => {
                const guess = parseInt(input);

                if (isNaN(guess)) {
                    console.log('Пожалуйста, введите число.');
                    askGuess();
                    return;
                }

                previousGuesses.push(guess);
                attempts--;

                if (guess === randomNumber) {
                    console.log(`Поздравляем! Вы угадали число ${randomNumber} с ${10 - attempts} попыток!`);
                    askPlayAgain();
                } else if (guess < randomNumber) {
                    console.log(`Загаданное число больше. У вас осталось ${attempts} попыток.`);
                    console.log(`Ваши предыдущие попытки: ${previousGuesses.join(', ')}`);
                    askGuess();
                } else {
                    console.log(`Загаданное число меньше. У вас осталось ${attempts} попыток.`);
                    console.log(`Ваши предыдущие попытки: ${previousGuesses.join(', ')}`);
                    askGuess();
                }
            });
        } else {
            console.log(`Вы исчерпали все попытки. Загаданное число было: ${randomNumber}.`);
            askPlayAgain();
        }
    }

    function askPlayAgain() {
        rl.question('Хотите сыграть еще раз? (да/нет): ', (answer) => {
            if (answer.toLowerCase() === 'да' || answer.toLowerCase() === 'yes') {
                playGame();
            } else {
                console.log('Спасибо за игру!');
                rl.close();
            }
        });
    }

    askGuess();
}

playGame();