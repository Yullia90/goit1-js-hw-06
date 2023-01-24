//Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
//по кліку на button.change - color і виводить значення кольору в span.color.

//<div class="widget">
//  <p>Background color: <span class="color">-</span></p>
//  <button type="button" class="change-color">Change color</button>
//</div>

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const containerEl = document.querySelector(".widget");
const spanColorText = containerEl.querySelector(".color");
const buttonEL = containerEl.querySelector(".change-color");
console.log(containerEl, spanColorText, buttonEL);

buttonEL.addEventListener("click", changeColor);

function changeColor(event) {
  event.preventDefault();
  console.log("object");
  console.log(event.currentTarget);
}
const backgroundColorBody = document.body.style.backgroundColor;
console.dir(backgroundColorBody);

const currentTarget = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  console.log(currentTarget);
}
