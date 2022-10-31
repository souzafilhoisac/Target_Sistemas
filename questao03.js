/*3) Dado um vetor que guarda o preço de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor preço de faturamento ocorrido em um dia do mês;
• O maior preço de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o preço de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

let billing = [
    {
        day: "domingo",
        date: "01/05/2022",
        price: 0,
    },
    {
        day: "segunda-feira",
        date: "02/05/2022",
        price: 6200,
    },
    {
        day: "terça-feira",
        date: "03/05/2022",
        price: 7500,
    },
    {
        day: "quarta-feira",
        date: "04/05/2022",
        price: 5600,
    },
    {
        day: "quinta-feira",
        date: "05/05/2022",
        price: 9800,
    },
    {
        day: "sexta-feira",
        date: "06/05/2022",
        price: 9400,
    },
    {
        day: "sábado",
        date: "07/05/2022",
        price: 0,
    }
];



function lowerHigherAverageBilling(array) {

    let lowerPrice = Infinity;
    let higherPrice = Number.NEGATIVE_INFINITY;
    let eachItem = 0;
    let totalPrice = 0;
    let averageHigherItens = 0;

    for(let day of array) {
        if(day.price !== 0) {
            eachItem += 1;
            totalPrice += day.price;
            if(day.price < lowerPrice) {
                lowerPrice = day.price;
            }
            if(day.price > higherPrice) {
                higherPrice = day.price;
            }
        }
    }

    const averagePeriod = totalPrice / eachItem;
    
    for(let day of array) {
        if(day.price > averagePeriod) {
            averageHigherItens += 1;
        }
    }
    return {lowerPrice, higherPrice, averageHigherItens};
}

console.log(lowerHigherAverageBilling(billing))

/* Abaixo o código individual de cada retorno, a fragmentação me auxiliou na construção do código principal*/

// function higherBilling(array) {
//     let higherPrice = Number.NEGATIVE_INFINITY;
//     let dateFound;
//     for(let day of array) {
//         if(day.price > higherPrice) {
//             higherPrice = day.price;
//             dateFound = day.date;
//         }
//     }
//     return ({dateFound, higherPrice});
// }

// function lowerBilling(array) {
//     let dateFound;
//     let lowerPrice = Infinity;
//     for(let day of array) {
//         if(day.price !== 0) {
//             if(day.price < lowerPrice) {
//                 lowerPrice = day.price;
//                 dateFound = day.date;
//             }
//         }
//     }
//     return ({dateFound, lowerPrice});
// }

// function averageBilling(array) {

//     let eachItem = 0;
//     let totalPrice = 0;
//     let averageHigherItens = 0;

//     for(let day of array) {
//         if(day.price !== 0) {
//             eachItem += 1;
//             totalPrice += day.price;
//         }
//     }

//     let averagePeriod = totalPrice / eachItem;

//     for(let day of array) {
//         if(day.price > averagePeriod) {
//             averageHigherItens += 1;
//         }
//     }

//     return ({averageHigherItens});
// }


// console.log(higherBilling(billing))
// console.log(lowerBilling(billing))
// console.log(averageBilling(billing))