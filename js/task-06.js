// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const ref = {
  input: document.querySelector('#validation-input'),
};
console.log(ref.input);
ref.input.addEventListener('blur', onInputBlur);
const temp = Number(ref.input.getAttribute('data-length'));
// console.log(temp);
function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  console.log(temp);
  if (temp !== event.currentTarget.value.length) {
    onInvalidElement();
  } else {
    onValidElement();
  }
}
function onInvalidElement() {
  ref.input.classList.add('invalid');
}
function onValidElement() {
  ref.input.classList.remove('invalid');
  ref.input.classList.add('valid');
}
