
//  Добавил функц. сброса счетчика чисто по фану. Если нужно удалю

const decrementRef = document.querySelector('button[data-action="decrement"]')
const incrementRef = document.querySelector('button[data-action="increment"]')
const remuveRef = document.querySelector('button[data-action="remuve"]')
const spanRef = document.querySelector('#value')

let counterValue =0

function increment() {
   return counterValue += 1
}

function decrement() {
   return counterValue -= 1
}

function remuve() {
  return  counterValue = 0
}

decrementRef.addEventListener('click', () => {
    
    spanRef.textContent = decrement();
});

incrementRef.addEventListener('click', () => {
    
    spanRef.textContent = increment();
});

remuveRef.addEventListener('click', () => {
    spanRef.textContent = remuve();
})
