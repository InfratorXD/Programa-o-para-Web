console.log("Aula nova!");

document.write("Escrevendo no HTML" + "<br>");

//Comparação
/*let num1 = +prompt("Digite um número: ");
let num2 = +prompt("Digite o segundo número: ");

document.write("Num1 é igual a num2: " + (num1 === num2));*/


//Estrutura de controle
let interruptor = "on";
if(interruptor == "on"){
    alert("Lâmpada ligada!");
    document.write("Ligou!" + "<br>");
}
else{
    alert("Lâmpada desligada!");
    document.write("Desligou" + "<br>");
}

let senha = prompt("Digite a sua senha: ");
let confirmacaoSenha = prompt("Digite a sua senha novamente: ");

if(senha === confirmacaoSenha){ //os iguais três vezes servem para verificar a igualdade do número e do tipo, se são os mesmos.
    alert("Senhas iguais!");
}
else{
    ("Senhas não coincidem");
}

//Para comentar uma grande parte, seleciona a parte, aperta CTRL + K e depois CTRL + C
