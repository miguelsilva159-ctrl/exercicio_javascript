function gerarDesconto(desconto, preco){
if(preco > 550){
    let totalDesconto = (100 - desconto) / 100
let precoFinal = preco * totalDesconto
return precoFinal
}else{
    return preco
}
}


function calcularPreco(qtVolei, qtFutbol, qtBasquete){
let preco = (qtVolei * 247.58) + (qtFutbol * 179.57) + (qtBasquete * 260.89) 

return preco
}

let resposta = document.getElementById('resposta')
function principal(){
//entrada de dados






let qtVolei = Number(document.getElementById('qtVolei').value)
let qtFutbol = Number(document.getElementById('qtFutbol').value)
let qtBasquete = Number(document.getElementById('qtBasquete').value)
let desconto = 8

let valorTotal = calcularPreco(qtVolei, qtFutbol, qtBasquete)
let valorFinal = gerarDesconto(desconto,valorTotal)

console.log (valorFinal.toFixed(2))


resposta.innerHTML = ``
resposta.innerHTML += `o valor da sua compra sera ${valorTotal.toFixed(2)}<br>`
resposta.innerHTML += `com desconto sera ${valorFinal.toFixed(2)}<br>`

 }


// Uma loja de artigos esportivos precisa desenvolver um sistema para cálculo do preço de venda que considere o desconto conforme a quantidade vendida. Para testar a primeira versão do programa, foi pedido para considerar que se o usuário comprar mais de R$ 550.00, ele ganha um desconto de 8% no preço final. Os itens de teste e preços da primeira versão do sistema são do tipo tênis: de vôlei que custa R$ 247.58, de futebol que custa R$ 179.57 e de basquete que custa R$ 260.89, respectivamente. Faça um programa que pergunte ao usuário quantos itens ele deseja comprar de cada produto e apresente o valor final de venda, considerando o possível desconto de 8%.