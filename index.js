//Impressão no console do navegador
console.log("Olá mundo!");

//Declaração de variáveis
var nome = "Guilherme"; //escopo global
console.log(nome);
console.log(typeof nome); //o Typeof serve para ver o tipo da variável

let cor = "Azul"; //escopo local
console.log(cor);

let preco1 = 10.33; //sem as aspas, vira um tipo número
console.log(preco1);
console.log(typeof preco1);

let preco2 = 10;
let total = preco1 + preco2;
console.log(total);

const planeta = "Terra"; //escopo local
console.log(planeta); //A constante não pode mudar, como o nome já diz, ela é constante

nome = "Cazé";
console.log(nome);
cor = "Vermelho";
console.log(cor);

//let se usa apenas em um bloco, são mais usados em funções
//var pode se usar de maneira global, mas os dois fazem a mesma função so que com restrições diferentes

//Tipo de dados
let cidade = "Brasília"; //String
let telefone = "61985958595" // Número
let status = true; //booleano
let frutas = ["Maçã", "Uva", "Banana"]; //Array, dentro de uma variável, podemos ter varios valores.
let pessoa = {nome: "João", idade: 15}; //Objetos

console.log(typeof cidade);
console.log(typeof telefone);
console.log(typeof status);
console.log(typeof frutas);
console.log(typeof pessoa);

//Modelo de impressão (literal)
console.log(`O seu nome é ${nome} e a sua cidade é ${cidade}`);

//Operadores aritméticos
let a = 10;
let b = 2;
console.log(a + b); //adição
console.log(a ** b); //expoente
console.log(a % b); //módulo

let c = a + b / 2;
console.log(c);

//DOM (introdução)
document.getElementById("myH2").textContent = "Aula 01 16/08/2024";