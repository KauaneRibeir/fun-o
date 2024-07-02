let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let maiorNota = 0
let menorNota = notas[0]
let acima = 0
let baixo = 0
function notamaior(){
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > maiorNota) {
            maiorNota = notas[i]
        }

    }
    return maiorNota
}

console.log("maior " + notamaior())


function notamenor(){
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < menorNota) {
            menorNota = notas[i]
        }

    }
    return menorNota
}

console.log("menor " + notamenor())


function aprovado(acima){
    for (let i = 0; i < notas.length; i++) {
    if(notas[i] >= 6) {
        acima++
    }
}
return acima
}
console.log("aprovado " + aprovado(acima) )


function reprovado(baixo){
    for (let i = 0; i < notas.length; i++) {
    if(notas[i] < 6) {
        baixo++
}
    }
return baixo
}

console.log("reprovado " + reprovado (baixo) )

