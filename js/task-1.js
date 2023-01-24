// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

  addProperty(value) {
    this.mood = value;
  },
  changeHobby(value) {
    this.hobby = value;
  },
  changePremium(value) {
    this.premium = value;
  },
};
const properties = Object.keys(user);
for (const property of properties) {
  console.log(`${property} : ${user[property]},`);
}
const mood = 'happy';
user.addProperty(mood);
user.changeHobby('skydiving');
user.changePremium('false');

console.log(user);
