    var numContas = 0
    var valTotal = 0
    var resposta = ""

function registrar(){
    

    var inDescrição = document.getElementById("inDescrição")
    var inValor = document.getElementById("inValor")
    var outListaContas = document.getElementById("outListaContas")
    var outTotal = document.getElementById ("outTotal")

    var descricao = inDescrição.value
    var valor = Number(inValor.value)

    if(descricao == "" || valor =="" || isNaN(valor)){
        alert("Insira os dados corretamente")
    } else{
   
    numContas++
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n"

    outListaContas.textContent = resposta + ""
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2)

    inDescrição.value = ""
    inValor.value = ""
}
}

function limpar(){
    outListaContas.textContent = ""
    outTotal.textContent = ""
}