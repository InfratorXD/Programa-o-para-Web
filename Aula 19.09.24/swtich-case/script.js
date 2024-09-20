var botao = document.getElementById("converterButton"); //puxamos o elemento do usuário quando ele clicar no botão converter

botao.onclick = function(){ //Usa-se o VAR dentro de função, o LET usa fora

    var temperatura = parseFloat(document.getElementById("temperatura").value); //Capturando o valor que o usuário digitar, não esqueça do .value

    var tipoConversao = document.getElementById("conversao").value; //Seleciona a opção escolhida, C para F ou ao contrário
    //console.log(tipoConversao);

    var resultado = document.getElementById("resultado");

    var resultadoConversao;

    switch(tipoConversao){
        case "cf":
            resultadoConversao = ((temperatura * 9)/5) + 32;
            resultado.textContent = ("Sua temperatura em Celsius " + temperatura + " em Fahrenheit é " + resultadoConversao);
            //document.write("Sua temperatura em Celsius " + temperatura + " em Fahrenheit é " + resultadoConversao);

            //Usa o textContent porque ele puxa o ID, além de printar dentro da propria página, sem criar outra
            //O document.write não usa o ID, já printa direto
        break;

        case "fc":
            resultadoConversao = ((temperatura - 32)/1.8);
            resultado.textContent = ("Sua temperatura em Fahrenheit " + temperatura + " em Celsius é " + resultadoConversao.toFixed(2)); // toFixed
        break;

        default:
            resultado.textContent = ("Selecione uma conversão válida");
            break;

    }

}
