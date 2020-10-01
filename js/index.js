const value = document.getElementById('value')
const billInput = document.getElementById('bill')
const tipInput = document.getElementById('tip')

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)

document.addEventListener('DOMContentLoaded', calculateTip);

function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseFloat(tipInput.value)

    const tipAmount = billValue * tipValue / 100

    value.innerHTML = '$' + tipAmount.toFixed(2)
}