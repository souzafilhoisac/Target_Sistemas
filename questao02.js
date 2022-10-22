let num1 = 0;
let num2 = 1;
let num3 = 0;
let seq = [0, 1];

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