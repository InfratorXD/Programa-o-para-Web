var botao = document.getElementById("VerificarButton");

botao.onclick = function(){
    var ano_nascimento = document.getElementById("NascimentoInput").value;
    //console.log(idade);

    var resultado = document.getElementById("resultado");

    ano_nascimento = 2024 - ano_nascimento;

    if(ano_nascimento >=18){
        //console.log("Maior de idade");
        resultado.textContent = "Maior de idade";
    }
    else{
        //console.log("Menor de idade");
        resultado.textContent = "Menor de idade";
    }
}