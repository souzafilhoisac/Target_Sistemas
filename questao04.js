/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

let billing = [
    {
        state: "SP",
        price:67836.43
    },
    {
        state: "RJ",
        price:36678.66
    },
    {
        state: "MG",
        price:29229.88
    },
    {
        state: "ES",
        price:27165.48
    },
    {
        state: "Outros",
        price:19849.53
    }
]

let totalPrice = 0;
let percentageBilling = [];

for(let price of billing) {
    totalPrice += price.price;
}
for(let iten of billing) {
    percentageBilling.push({state: iten.state, pertentage: ((iten.price / totalPrice)*100).toFixed(2)})
}
console.log(percentageBilling);