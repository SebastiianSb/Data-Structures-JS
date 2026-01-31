const usernameInput = document.getElementById('username-input')
const conceptInput = document.getElementById('concept')
const quantityInput = document.getElementById('quantity-input')
const unitPrice = document.getElementById('price-input')

const totalCalculated = document.getElementById('price-calculated-label')


unitPrice.addEventListener('input', function(){
    totalCalculated.textContent = unitPrice.value
    if(unitPrice.value === ''){
        totalCalculated.textContent = 0.00
    }
})

