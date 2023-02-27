// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const ref = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

ref.input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
  ref.span.setAttribute('style', `font-size:${event.currentTarget.value}px`);
  console.log(ref.span);
}
