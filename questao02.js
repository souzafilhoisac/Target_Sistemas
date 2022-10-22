/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

let num1 = 0;
let num2 = 1;
let num3 = 0;
let seq = [0];

function Fibonacci(num){

    while(num3 <= num) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        seq.push(num1)
    }

    let resultado = seq.pop()

    if(resultado === num) {
        return(`O número ${num} é o próximo número da sequência... ${seq}`)
    } else {
        return('O seu número não pertence à sequência.')
    }
}

console.log(Fibonacci(21))