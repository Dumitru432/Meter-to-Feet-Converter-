let meterBtn = document.getElementById('meter')
let feetBtn = document.getElementById('feet')
let inputElement = document.getElementById('input')
let outputElement = document.getElementById('output')

meterBtn.addEventListener('click', ()=>{
    outputElement.value = input.value / 3.281 + " meters"
})


feetBtn.addEventListener('click', ()=>{
    outputElement.value = inputElement.value * 3.281 + ' feets'
})