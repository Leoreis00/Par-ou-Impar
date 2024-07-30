//Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.//

let readline = require('readline-sync')

let numero1 = readline.questionInt('Escolha o primeiro número: ');
let numero2 = readline.questionInt('Escolha o segundo número: ');
let soma = numero1 + numero2;

if(soma > 100){
    console.log(`A soma de ${numero1} e ${numero2} é ${soma}, que é maior que 100.`)
}else{
console.log(`A soma de ${numero1} e ${numero2} é ${soma}.`)
}