// # Задание 6

// Напиши скрипт со следующим функционалом:

// - При загрузке страницы пользователю предлагается в `prompt` ввести число. Ввод сохраняется в переменную `input` и добавляется в массив чисел `numbers`.
// - Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет `Cancel` в `prompt`.
// После того как пользователь прекратил ввод нажав `Cancel`, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную `total`. Используй цикл `for` или `for...of`. После чего в консоль выведи строку `'Общая сумма чисел равна [сумма]'`.

// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода,показывай `alert` с текстом `'Было введено не число, попробуйте еще раз'`, при этом результат `prompt` записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в `prompt`.
let numbers = [];
let total = 0;
let input;

for (let i = 0; i !== input; i += 1) {
  input = prompt('Vvedite chislo');
  if (input === null) {
    break;
  } else if (isNaN(input)) {
    alert('Vi vveli ne chislo');
  } else {
    input = Number(input);
    numbers.push(input);
    console.log(numbers);
  }
}
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
//

//

//

//

//

//

//

// for (let i = 0; i !== null; i += 1) {
//   input = prompt('vvedi chislo');

//   if (input === null) {
//     break;
//   } else if (isNaN(input)) {
//     console.log('povtorite vvvod');
//   } else if (input !== null) {
//     input = Number(input);
//     numbers.push(input);
//     console.log(numbers);
//   }
// }
// for (const number of numbers) {
//   total += number;
// }
// console.log(`Total sum = ${total}`);
