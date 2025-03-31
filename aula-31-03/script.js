// Solicitar dados do usuário
var nome = prompt("Por favor, insira seu nome:");
var numero = parseFloat(prompt("Agora insira um número:"));
 
// Operações com os dados fornecidos
var saudacao = "Olá, " + nome + "! Seja bem-vindo(a)!";
var resultadoSoma = numero + 10; // Soma de um número fixo
 
// Exibir os resultados
console.log(saudacao);
console.log("O número que você forneceu, somado a 10, é: " + resultadoSoma);
alert("Obrigado, " + nome + "! Confira os resultados no console.");