//Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
//по кліку на button.change - color і виводить значення кольору в span.color.

//<div class="widget">
//  <p>Background color: <span class="color">-</span></p>
//  <button type="button" class="change-color">Change color</button>
//</div>

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// const body = document.querySelector("body");
// const spanColorText = document.querySelector(".color");
// const buttonEL = document.querySelector(".change-color");

// buttonEL.addEventListener("click", () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   document.spanColorText.textContante = document.body.style.backgroundColor;

//   // event.preventDefault();
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//==============================
const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorName: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.changeColorBtn.addEventListener("click", () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = refs.body.style.backgroundColor;
});
