//написать игру в которой нужно будет угадать число
//если пользователь ввел неправильное число-предложить подсказать ему в каком направлении двигаться в большую или менбшую сторону
//вывести результат на экран с помощью alert

// const secretNumber = Math.round(Math.random() * (100 - 1) + 1);
// console.log(secretNumber);
// let userInput;

// for (let i = 0; i !== null; i += 1) {
//   inputNumber = prompt('Please enter the number');
//   console.log(inputNumber);
//   if (inputNumber === null || isNaN(inputNumber)) {
//     console.log('You lose');
//     break;
//   }
//   inputNumber = Number(inputNumber);

//   if (inputNumber === secretNumber) {
//     console.log('You win');
//     break;
//   } else if (inputNumber < secretNumber) {
//     console.log(`secretNumber is more that you enter`);
//   } else if (inputNumber > secretNumber) {
//     console.log(`secretNumber is less that you enter`);
//     //   } else {
//     //     console.log('you cancel');
//   }
// }
`use strict`;
const secretNumber = Math.round(Math.random() * (100 - 1) + 1);
// console.log(secretNumber);
let userNumber;
do {
  const userInput = prompt('Please enter the number');
  userNumber = Number.parseInt(userInput);
  console.log(userNumber);
  if (userNumber === secretNumber) {
    console.log('You won!');
  } else if (userNumber > secretNumber) {
    console.log('Please enter the less figure');
  } else if (userNumber < secretNumber) {
    console.log('Please enter the more figure');
  } else {
    console.log('exit');
  }
} while (secretNumber !== userNumber && !isNaN(userNumber));
