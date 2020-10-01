const tipElement = document.getElementById('tip')
const totalElement = document.getElementById('total')
const billInput = document.getElementById('billinput')
const tipInput = document.getElementById('tipinput')

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)

document.addEventListener('DOMContentLoaded', calculateTip);

function calculateTip() {
    const bill = parseFloat(billInput.value)
    const percent = parseFloat(tipInput.value)

    var tip = bill * percent / 100
    var total = bill + tip

    tipElement.innerHTML = 'Tip: $' + tip.toFixed(2)
    totalElement.innerText = 'Total: $' + total.toFixed(2)
}