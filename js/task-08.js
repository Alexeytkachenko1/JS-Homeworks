// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const ref = {
  boxes: document.querySelector('#boxes'),
  create: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
};
ref.create.addEventListener('click', onInputAmount);
ref.destroy.addEventListener('click', destroyBoxes);

function onInputAmount() {
  const amount = document.querySelector('input').value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const initialSize = 30;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < amount; index++) {
    const div = document.createElement('div');
    let size = initialSize + index * 10;
    div.style.cssText = `width:${size}px; height:${size}px; background-color:rgb(${random()},${random()},${random()})`;
    fragment.appendChild(div);
  }
  ref.boxes.appendChild(fragment);
}
function destroyBoxes() {
  ref.boxes.innerHTML = '';
}
function random() {
  return Math.floor(Math.random() * 256);
}
