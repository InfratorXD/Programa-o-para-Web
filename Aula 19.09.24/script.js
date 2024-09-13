//Aula 13/09/2024
//Estrutura de controle: Switch case

let op = prompt("Operação: soma e divisao");
let num1 = parseFloat(prompt("Número 1: "));
let num2 = parseFloat(prompt("Número 2: "));

let resultado;

switch(op.toLowerCase()) { //Se deixar sem os parenteses roxo, o código da invalido, precisa deixar para puxar a função
    case "soma":
        resultado = num1 + num2;
        break;

    case "divisao":
        if (num2 !=0){
            resultado = num1 / num2;
        }

        else{
            resultado = "Não é possível dividir por zero";
        }

        break;

    default:
        resultado = "Operação inválida!";
        break;

}

document.write("Resultado: " + resultado);



//Comentários sobre a N1: AT1
//Explicação da N1: AT2