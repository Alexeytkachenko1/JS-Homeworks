/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

const min = 0;
const max = 5;
let sumEven = 0;
let sumOdd = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 == 0) {
    console.log('четное:', i);
    sumEven += i;
  } else {
    console.log('нeчетное:', i);
    sumOdd += i;
  }
}
console.log('sumEven: ', sumEven);
console.log('sumOdd: ', sumOdd);
