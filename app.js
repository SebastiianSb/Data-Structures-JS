const usernameInput = document.getElementById('username-input')
const conceptInput = document.getElementById('concept')
const quantityInput = document.getElementById('quantity-input')
const unitPriceInput = document.getElementById('price-input')

const totalCalculated = document.getElementById('price-calculated-label')

const stackBody = document.getElementById('stack-table-body')
const queueBody = document.getElementById('queue-table-body')
const listBody = document.getElementById('list-table-body')

const btnRegisterReceipt = document.getElementById('btn-register')


unitPriceInput.addEventListener('input', function(){
    totalCalculated.textContent = unitPriceInput.value
    if(unitPriceInput.value === ''){
        totalCalculated.textContent = 0.00
    }
})

let idCounter = 0

btnRegisterReceipt.addEventListener('click', function(){

    const selectorStack = document.querySelector('input[id="struct-stack"]:checked')
    const selectorQueue = document.querySelector('input[id="struct-queue"]:checked')
    const selectorList = document.querySelector('input[id="struct-list"]:checked')

    idCounter++
    if(selectorStack){
        news.stack(idCounter,usernameInput.value,conceptInput.value,quantityInput.value,unitPriceInput.value,sumInvoices(unitPriceInput.value,quantityInput.value))
        news.printStack()
    }
    if(selectorQueue){
        newq.enqueue(idCounter,usernameInput.value,conceptInput.value,quantityInput.value,unitPriceInput.value,sumInvoices(unitPriceInput.value,quantityInput.value))
        newq.printQueue()
    }
    if(selectorList){

    }
})

function sumInvoices(uPrice,quantityIn){

    let totalCalculated = (uPrice * quantityIn)
    return totalCalculated
}

class Stack{
    constructor(){
        this.newStack = []
    }
    stack(e1,e2,e3,e4,e5,e6){  //(e) means element

        const objStack = {
            id: e1,
            client: e2,
            concept: e3,
            quantity: e4,
            price: e5,
            total: e6
        }

        this.newStack.push(objStack)
    }
    unstack(objStack){
        this.newStack.pop(objStack)
    }
    printStack(){
        stackBody.textContent = ''

        this.newStack.forEach((objStack) => {
            const stackPrint = `
            <tr>
                <td>${objStack.id}</td>
                <td>${objStack.client}</td>
                <td>${objStack.concept}</td>
                <td>${objStack.quantity}</td>
                <td>${objStack.price}</td>
                <td>${objStack.total}</td>
            </tr>
            `
        stackBody.insertAdjacentHTML('afterbegin',stackPrint)

        })
    }
}
const news = new Stack()

class Queue {
    constructor(){
        this.newQueue = []
    }
    enqueue(e1,e2,e3,e4,e5,e6){
        const objQueue = {
            id: e1,
            client: e2,
            concept: e3,
            quantity: e4,
            price: e5,
            total: e6
        }
        this.newQueue.push(objQueue)
    }
    dequeue(){
        this.newQueue.shift(objQueue)
    }
    printQueue(){
        queueBody.textContent = ''

        this.newQueue.forEach((objQueue) => {
            const queuePrint = `
            <tr>
                <td>${objQueue.id}</td>
                <td>${objQueue.client}</td>
                <td>${objQueue.concept}</td>
                <td>${objQueue.quantity}</td>
                <td>${objQueue.price}</td>
                <td>${objQueue.total}</td>
            </tr>
            `
            queueBody.insertAdjacentHTML('beforebegin', queuePrint)
        })
    }
}
const newq = new Queue()

