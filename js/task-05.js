// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const ref = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
ref.input.addEventListener('input', onInput);

function onInput(event) {
  if (event.currentTarget.value === '') {
    ref.output.textContent = 'незнакомец';
  } else {
    ref.output.textContent = event.currentTarget.value;
  }
}
