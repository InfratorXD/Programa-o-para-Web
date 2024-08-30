//Aula 30/08/2024
//Estrutura de repetição (For)
//Manipulação DOM (For)

console.log("Funcionou!!")

//For
//Ex1: Exibir números de 1 a 5
//document.write("Números de 1 a 5: <br>");
//for(let i = 1; i <=5; i++){ //Usa-se o let para escopo local
    //console.log(i);
    //document.write(i + "<br>");
//}

//Ex2: Criar um programa que solicita ao usuário uma qtde de números
//let quantidade = +prompt("Qtde de números: ");
    //for (let i = 1; i <= quantidade; i++){
            //document.write(i + "<br>");
    //}

//Ex3: Solicitar um número e calcular a soma de todos os números
let limite = parseFloat(prompt("Digite o limite de números: "));
let soma = 0;

for(let i = 1; i <= limite; i++){
    let numero = +prompt("Numero: ");
    document.write("Número: " + numero + "<br>");
    soma += numero;
}
document.write("Soma dos números: " + soma);