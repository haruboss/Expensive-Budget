const Expens = document.querySelector('#name')
const amount = document.querySelector('#amount')
const clear = document.querySelector('#clear')
const confirm = document.querySelector('#confirm')
const expensList = document.querySelector('#expensList')
const totalExpences = document.querySelector("#totalExpences")

let totalAmount = 0;

const remove = () => {
    Expens.value = ''
    amount.value = ''
}

confirm.addEventListener('click', ()=>{
    const getName = Expens.value
    const getAmount = amount.value
    if(getName.trim().length <= 0 ||
    getAmount <= 0 ||
    getAmount.trim().length <= 0
    ){
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid value!!'
        alert.message = 'please enter valid expences and amount.'
        // alert.buttons = ['Okay']
        alert.buttons = [{
        text: 'Okay',
        role: 'Ok',
    }]
        document.body.appendChild(alert);
        return alert.present();
    }
    const addlist = document.createElement('ion-item')
    addlist.textContent = getName + ": $" + getAmount

    expensList.appendChild(addlist)
    totalAmount += +amount.value
    totalExpences.textContent = totalAmount
    remove()
})

clear.addEventListener('click', remove)