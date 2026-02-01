const usernameInput = document.getElementById('username-input')
const conceptInput = document.getElementById('concept')
const quantityInput = document.getElementById('quantity-input')
const unitPrice = document.getElementById('price-input')

const totalCalculated = document.getElementById('price-calculated-label')

const stackBody = document.getElementById('stack-table-body')
const queueBody = document.getElementById('queue-table-boby')
const listBody = document.getElementById('list-table-body')

const btnRegisterReceipt = document.getElementById('btn-register')


unitPrice.addEventListener('input', function(){
    totalCalculated.textContent = unitPrice.value
    if(unitPrice.value === ''){
        totalCalculated.textContent = 0.00
    }
})


btnRegisterReceipt.addEventListener('click', function(){
    sumInvoices(unitPrice.value,quantityInput.value)
})

function sumInvoices(uPrice,quantityIn){

    let totalCalculated = (uPrice * quantityIn)
    stackBody.textContent = totalCalculated
}

class Stack{
    constructor(){
        this.newStack = []
    }
    stacking(e){
        this.newStack.push(e)
    }
    unstack(){
        this.newStack.pop
    }
}
const news = new Stack()



