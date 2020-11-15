const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let arrElem = [];
const get = (arr) => arr.forEach(element => {

  const abbIngredients = document.createElement('li') // создаем лишки
   abbIngredients.textContent = element   // Добавляем в лишки текст. из масива ingredients[i] который проходим циклом
 arrElem.push(abbIngredients)
  
})

const abbInDom = document.querySelector('#ingredients') //Находим елемент по ID 
get(ingredients)
abbInDom.append(...arrElem) 

