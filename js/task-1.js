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
//             // Количество элементов: 5


// >>>>>>>>>>>>>>>>>>>>>>>>>Таже задача другой вариант решения

// const ulRef = document.querySelectorAll('#categories >li');
// console.log(`В списке ${ulRef.length}  категории.`);

// const h2Ref = document.querySelectorAll('#categories >li > h2');
// const liRef = document.querySelectorAll('#categories >li > ul');



// let arr = []
// const allCateg = h2Ref.forEach(element => {
//   arr.push( element.textContent)
// });


// console.log(`Категория ${arr[0]}`);
// console.log(`Количество елементов ${liRef[0].children.length} `);

// console.log(`Категория ${arr[1]}`);
// console.log(`Количество елементов ${liRef[1].children.length} `);

// console.log(`Категория ${arr[2]}`);
// console.log(`Количество елементов ${liRef[2].children.length} `);

