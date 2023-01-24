// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

//Напиши скрипт створення і очищення колекції елементів.
//Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться
//колекція.
//Натисненням на кнопку Очистити, колекція елементів очищається.

//<div id="controls">
//  <input type="number" min="1" max="100" step="1" />
//  <button type="button" data-create>Create</button>
//  <button type="button" data-destroy>Destroy</button>
//</div>

//<div id="boxes"></div>

//===========
// const containerEl = document.querySelector("#controls input");
// const btmCreatEl = document.querySelector("button[data-create]");
// const btmDestroyEl = document.querySelector("button[data-destroy]");
// const newContainerEl = document.querySelector("#boxes");
// console.log(containerEl);
// console.log(btmCreatEl);
// console.log(btmDestroyEl);
// console.log(newContainerEl);

// btmCreatEl.addEventListener("click", createBoxes);
// btmDestroyEl.addEventListener("click", createBoxes);

// let size = boxes.clientWidth;
// console.dir(boxes);

// function createBoxes(amount) {
//   boxes.style.width = size + "px";
//   boxes.style.height = size + "px";
// }
// function destroyBoxes() {
//   boxes.style.width = size + "px";
//   boxes.style.height = size + "px";
// }
//========
const containerEl = document.querySelector("#controls input");
const btmCreatEl = document.querySelector("button[data-create]");
const btmDestroyEl = document.querySelector("button[data-destroy]");
const newContainerEl = document.querySelector("#boxes");
console.log(containerEl);
console.log(btmCreatEl);
console.log(btmDestroyEl);
console.log(newContainerEl);

btmCreatEl.addEventListener("click", getBtn);
btmDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i <= amount; i += 1) {
    const element = size + i * 10;

    const div = document.createElement("div");
    div.style.cssText = `width: ${element}px;
    height: ${element}px;
    background-color:${getRandomHexColor()}`;
    newContainerEl.appendChild(div);
  }
}
function getBtn() {
  const amount = +document.querySelector("input").value;
  createBoxes(amount);
}
function destroyBoxes() {
  newContainerEl.innerHTML = "";
}
//Створи функцію createBoxes(amount), яка приймає один параметр - число.
//Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову
//функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
//всі створені елементи.
