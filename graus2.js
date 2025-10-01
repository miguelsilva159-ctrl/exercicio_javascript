let resposta = document.getElementById('resposta')

function principal(){

let frn = Number(document.getElementById('frn').value) 



let calculo = 5 / 9 * (frn - 32 )



resposta.innerHTML = ``
resposta.innerHTML += `conversão de fahrenheit para celcius é ${calculo.toFixed(2)}°`
}