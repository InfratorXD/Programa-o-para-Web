// var botao = document.getElementById("imprimirButton"); //para puxar o ID do HTML, usa-se o document.getElementById("Nome do id")

// botao.onclick = function(){ //onclick = quando a pessoa clicar no botão entra nessa função
//     var quantidade = document.getElementById("quantidadeInput").value; //Recupera o valor digitado
//     console.log(quantidade);

//     var resultado = document.getElementById("resultado");
//     var numeros = "";

//     //Laço de repetição
//     for (var i = 1; i <= quantidade; i++){
//         if(i %2 == 0){ //printar os números pares
//             numeros += i + " ";
//         }

//     }
    
//     resultado.textContent = numeros;

// };

//Exemplos com o While
//EX1:
// let contador = 1;

// document.write("Números de 1 a 5: <br>");

//     while (contador <= 5){
//         document.write(contador + "<br>");
//     }

//EX2:
let soma = 0;
let numero = 0;
let numeroDigitado = ""; //As aspas são a string

while(numero>=0){
    numero = +prompt("Digite um número (ou um número negativo para encerrar o programa");
        if(numero >=0){
            soma += numero;
            numeroDigitado += "<br>" + numero;
        }
}

document.write("Números digitados: " + numeroDigitado + "<br>");
document.write("Soma: " + soma);