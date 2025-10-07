
let resposta = document.getElementById

function calcularGasolina(litros){
if(litros >= 0 && litros <=20){
return litros * 6.14 * 0,98
}else{
return litros * 6.14 * 0.96
}
}


function calcularAlcool(litros){
    if(litros >= 0 && litros <=20){
        return litros * 4.13 * 0.97
        }else{
        return litros * 4.13 * 0.95
     }
}



function principal(){

    let litros = document.getElementById('tipo').value
    let tipo = Number(document.getElementById('litros').value)

resposta.innerHTML = ``


if(tipo === 'G'){
preco = calcularGasolina(litros)
resposta.innerHTML += `o preço total é ${preco.tofixed(2)} para ${litros} litros`
}else if(tipo === 'A'){
    preco = calcularAlcool(litros)
    resposta.innerHTML += `o preço total é ${preco.tofixed(2)} para ${litros} litros`
}else{
    console.log('tipo de combustivel invalido')
}

}

principal()