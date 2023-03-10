const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//В HTML есть пустой список ul#ingredients.

//< ul id = "ingredients" ></ >
//Напиши скрипт, который для каждого элемента массива ingredients:
//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.

const ulEl = document.querySelector("#ingredients");

const array = [];
for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  array.push(liEl);
}
ulEl.append(...array);
