let resposta = document.getElementById('resposta')

function principal(){

let celcius = Number(document.getElementById('celcius').value) 

let frn = 33.8

let calculo = (celcius * 1.8 + 32)



resposta.innerHTML = ``
resposta.innerHTML += `conversão de celcius para fahrenheit é ${calculo.toFixed(2)}°`
}