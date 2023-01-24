//Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.
//=========================//
// const inputEl = document.querySelector("#validation-input");
// inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   if (event.target.value.length === 6) {
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// }
//=========================//
// const inputEl = document.querySelector("#validation-input");
// const wordLengthEl = Number(inputEl.dataset.length);
// console.log(inputEl, wordLengthEl);

// inputEl.addEventListener("blur", (event) => {
//   if (event.currentTarget.value.length === wordLengthEl) {
//     input.classList.replace("invalid", "valid");
//   } else {
//     input.classList.replace("valid", "invalid");
//   }
//   console.log(event.currentTarget.value.length === wordLengthEl);
// });
//=========================//
const inputEl = document.querySelector("#validation-input");
const wordLengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === wordLengthEl) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
  console.log(event.currentTarget.value.length === wordLengthEl);
});
console.log(wordLengthEl);

//Яка кількість символів повинна бути в інпуті, зазначається в його
//атрибуті data - length.Якщо введена правильна кількість символів,
//то border інпуту стає зеленим,якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS - класи valid і invalid, які
//ми вже додали у вихідні файли завдання.
