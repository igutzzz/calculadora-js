let resultado = document.getElementById('resultado');
const calculadora = document.querySelector('.calculadora')
const keys = calculadora.querySelector('.botões')



keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;   
        const keyContent = key.textContent;
        const displayedNum =  resultado.textContent;
        const previousKeyType = calculadora.dataset.previousKeyType;
        if(!action) {
            calculadora.dataset.previousKeyType = 'number';
            if (displayedNum === '0' || previousKeyType === 'operator') {
                resultado.textContent = keyContent
              } else {
                resultado.textContent = displayedNum + keyContent
              };
            console.log('number key!');
        };
        if (
            action === 'mais' ||
            action === 'menos' ||
            action === 'divisão' ||
            action === 'multiplicação'
          ) {
            calculadora.dataset.previousKeyType = 'operator';
            console.log('operator key!');
          };
          if (action === 'decimal') {
                resultado.textContent = displayedNum + ','
                console.log('decimal key!')
          }
          
          if (action === 'reset') {
            console.log('reset key!')
          }

          if (action === 'delete') {
            resultado.textContent = displayedNum.substring(0, displayedNum.length - 1);
            console.log('delete key!')
          }
          
          if (action === 'result') {
            console.log('equal key!')
          }
    }
})

