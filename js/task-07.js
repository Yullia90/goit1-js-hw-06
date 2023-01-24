//Напиши скрипт, який реагує на зміну значення input#font - size - control
//(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener("change", changeSize);
//spanEl.addEventListener("click", changeText);

function changeSize(event) {
  inputEl.range = event.currentTarget.value;
  spanEl.style.fontSize = `${event.target.value}px`;
  console.log(spanText.style.fontSize);
}
