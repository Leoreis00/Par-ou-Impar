let readline = require('readline-sync');

console.log('=== É PAR OU IMPAR? ===');

let numero = readline.questionInt ('Escolha um numero: ');

if (numero % 2 == 0){
    console.log(`O número ${numero} é par.`);
}else {
    console.log(`O número ${numero} é impar.`);
}
