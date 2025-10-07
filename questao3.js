
//f(x)=(5x + 4) / (2x +1)

//substituir o x pelo valor dito pelo usuario

//classificar o resultado de acordo com o valor, se for negativo ou maior que 10 deve aparecer uma mensagem dizendo  "valor fora da faixa de calculo permitida"

let resposta = document.getElementById('resposta')

function calcularValor(x){
return ( 5 * x + 4 ) / (2 * x + 1)
}


function principal(){
let fx = 0
let x = Number(document.getElementById('x').value)

resposta.innerHTML = ``

if(x < 0){
    resposta.innerHTML('valor negativo! valor fora da faixa de calculo permitida. digite outro numero!')
}else if( x > 10){
    resposta.innerHTML('valor maior que 101 valor fora da faixa de calculo permitida. digite outro numero')
}else{



fx = calcularValor(x)
console.log (`para f( x )= (5 . x + 4) / (2 . x + 1)`)
console.log (`para f(${x})= (5 . ${x} + 4) / (2 . ${x} + 1) = ${fx}`)




resposta.innerHTML += `para f( x )= (5 . x + 4) / (2 . x + 1) <br>`
resposta.innerHTML += `para f(${x})= (5 . ${x} + 4) / (2 . ${x} + 1) = ${fx}`
}
}

principal()