// // Напиши класс Car с указанными свойствами и методами.

// class Car {
//   static getSpecs(carObj) {
//     console.log(carObj);
//   }
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({ maxSpeed, price } = {}) {
//     this.speed = 0;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     const resultSpeed = this.speed + value;
//     if (resultSpeed <= this.maxSpeed) {
//       this.speed += value;
//     } else this.speed = this.maxSpeed;
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     const resultSpeed = this.speed - value;
//     if (resultSpeed >= 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if ((this.isOn = true)) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(210);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/*
 * Фильтруем четные числа. Далее, на результате метода filter,
 * вызываем map и множим на 2. После чего на результате
 * метода map вызываем reverse.
 */

const result = numbers
  .filter(x => x % 2 === 0)
  .map(y => y * 2)
  .reverse();

console.log(result);
