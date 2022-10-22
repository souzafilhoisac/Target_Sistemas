
/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;


NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU*/

function reverseString(string){

    let invertedCharacter = "";

    for(let i = string.length -1; i >= 0; i--) {
        invertedCharacter += string[i];
    }

    return invertedCharacter;
    
}

console.log(reverseString("ahnim é áj agav assE"))