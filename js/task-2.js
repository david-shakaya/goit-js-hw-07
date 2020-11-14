const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const get = (arr) => arr.forEach(element => {

 const abbIngredients = document.createElement('li') // создаем лишки
  abbIngredients.textContent = element   // Добавляем в лишки текст. из масива ingredients[i] который проходим циклом
  const abbInDom = document.querySelector('#ingredients') //Находим елемент по ID 
  
  abbInDom.append(abbIngredients)  
});

get(ingredients)