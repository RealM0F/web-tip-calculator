const tip = document.getElementById('tip')
const total = document.getElementById('total')
const billInput = document.getElementById('billinput')
const tipInput = document.getElementById('tipinput')
const peopleInput = document.getElementById('people')

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)

document.addEventListener('DOMContentLoaded', calculateTip);

function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseFloat(tipInput.value)

    const tipAmount = billValue * tipValue / 100

    value.innerHTML = '$' + tipAmount.toFixed(2)
}