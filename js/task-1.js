console.log('Задача 1');

function countElem(elem) {
    
    const myTitle = document.querySelector(elem).children;
    console.log(`В списке  ${[...myTitle].length} категории.`)
  
}
countElem('ul#categories') //ul#categories: В списке  3 категории.


function findQuantityInList(indexProduct) {
const list = document.querySelectorAll('.item')
const category = list[indexProduct].firstElementChild

console.log(`Категория: ${category.textContent}`)

const numberItem  = list[indexProduct].children[1].children.length
console.log('Количество элементов:',numberItem)
}
findQuantityInList(0) //Категория: Животные
            // Количество элементов: 4
findQuantityInList(1) //Категория: Продукты
            // Количество элементов: 3
findQuantityInList(2) //Категория: Технологии
            // Количество элементов: 5