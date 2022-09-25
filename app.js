const zero = document.getElementById('zero')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const reset = document.getElementById('trash')


let numbers = 0;
plus.addEventListener('click',()=>{
    numbers++
    zero.textContent=numbers
    
    if (numbers > 0) {
        zero.style.color = 'green'
    }else if (numbers == 0){
        zero.style.color = 'black'
    }
})
minus.addEventListener('click',()=>{
    numbers--
    zero.textContent=numbers
    
    if (numbers < 0) {
        zero.style.color = 'darkblue'
    }else if (numbers == 0){
        zero.style.color = 'black'
    }
})
reset.addEventListener('click', () => {
    numbers == 0
    zero.textContent = 0
    zero.style.color = 'black'
})
