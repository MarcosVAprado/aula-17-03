// comentário de uma linha
/*
comentário de várias linhas 
*/

var cliente = "Maria";
var quantidade = 30;
var preco = 50.5;
var emEstoque = true;

var numeroA = 1;
var numeroB = 2;
var numeroC = 3;

var resultadoSoma = numeroA + numeroB;

var resultadoSub = numeroB - numeroA;

var resultadoProduto = numeroB * numeroC;

resultadoDivisao = numeroC / numeroB; 

var textoA = "WEB";
var textoB = "DEV";
var branco = " ";

var resultadoA = textoA + textoB;
var resultadoB = textoB + 1;
var resultadoC = textoA + branco + textoB;

console.log(resultadoA);
console.log(resultadoB);
console.log(resultadoC);

// Inicio aula 03

var nomeIserido = prompt("Insira seu nome e sobrenome: ");

console.log("O usuário " + nomeIserido + " logou no site");

alert("Olá, " + nomeIserido + "! Bem-Vindo!");

var idadeInserida = prompt("Insira sua idade");
var idadeCorreta = parseInt(idadeInserida);

alert("Sua idade é " + idadeCorreta);

var numero1 = prompt("Insira um número inteiro");
var numeroCorreto = parseInt(numero1);

var numero2 = prompt("Insira o segundo número inteiro");
var numeroCorreto2 = parseInt(numero2);

var numeroSoma = numeroCorreto + numeroCorreto2;
alert("A soma dos números é: " + numeroSoma);
