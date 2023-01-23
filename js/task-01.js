//Напиши скрипт который:

//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
//В результате, в консоли будут выведены такие сообщения.

//===================варіант 1===========================

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

const categoriesDetails = categoriesEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.querySelectorAll("li").length);
});

//===================варіант 2===========================

//const categoryEl = document.querySelector("#categories");
//console.log("Number of categories:", categoryEl.children.length);
//[...categoryEl.children].forEach((elem) => {
//  console.log("Category: ", elem.querySelector("h2").textContent);
//  console.log("Elements: ", elem.querySelectorAll("li").length);
//});
