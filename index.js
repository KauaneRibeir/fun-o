let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let maiorNota = 0
let menorNota = notas[0]
let acima = 0
let baixo = 0

function media(){
    let soma = 0 
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
}
return soma / notas.length;
}


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




// // declara um array de notas, sendo o array
// // composto de valores númericos
// let arrayNotas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];

// arrayNotas.push(8.0); // ref D

// function media(arrayNotas) {
//   let soma = 0;

//   for (let i = 0; i < arrayNotas.length; i++) {
//     soma += arrayNotas[i]; // ref A
//   }

//   return soma / arrayNotas.length;
// }

// function menorNota(arrayNotas) {
//   let arrMenorNota = arrayNotas[0]; // ref B
  
//   for (let i = 0; i < arrayNotas.length; i++) {
//     // ref B
//     if (arrayNotas[i] < arrMenorNota) {
//       arrMenorNota = arrayNotas[i];
//     }
//   }
//   return arrMenorNota;
// }

// function maiorNota(arrayNotas) {
//   let arrMaiorNota = arrayNotas[0]; // reb B
  
//   for (let i = 0; i < arrayNotas.length; i++) {
//     // ref B
//     if (arrayNotas[i] > arrMaiorNota) {
//       arrMaiorNota = arrayNotas[i];
//     }
//   }
//   return arrMaiorNota;
// }

// function qtdAcimaMedia(arrayNotas) {
//   let notasAcimaMedia = 0;
  
//   // ref C
//   for (let i = 0; i < arrayNotas.length; i++) {
//     if (arrayNotas[i] >= media(arrayNotas)) {
//       notasAcimaMedia++;
//     }
//   }
  
//   return notasAcimaMedia;
// }

// function qtdAbaixoMedia(arrayNotas) {
//   let notasAbaixoMedia = 0;
//   // ref C
  
//   for (let i = 0; i < arrayNotas.length; i++) {
//     if (arrayNotas[i] < media(arrayNotas)) {
//       notasAbaixoMedia++;
//     }
//   }
  
//   return notasAbaixoMedia;
// }


// console.log(`A média é ${media(arrayNotas).toFixed(2)} a menor nota é 
// ${menorNota(arrayNotas)} e a maior nota é ${maiorNota(arrayNotas)}, 
// a quantidade acima da média eh: ${qtdAcimaMedia(arrayNotas)} 
// e a quantidade abaixo da média eh: ${qtdAbaixoMedia(arrayNotas)}`);