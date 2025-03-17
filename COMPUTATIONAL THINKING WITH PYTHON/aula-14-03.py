
nome = input("Digite seu nome: ")
print(f"OLá {nome}")

soma = float(input("Digite um numero "))
soma1 = float(input("Digite outro numero para a soma "))
resultado = soma + soma1
print(f"O reutado é: {resultado}")

a = float(input("Digite um numero "))
b = float(input("digite mais um numero para a multiplicação "))
c = a * b
print(f"O resultado da multiplicação é: {c}")

celsius = int(input("Digite a temperatura em celsius"))
f = celsius * 1.8 + 32
print(f"A temperatura e fahrenheit é: {f}")

p = int(input("Digite seu peso"))
altura = int(input("Digite seu altura"))
IMC = p / altura **2
print(f"O seu IMC é: {IMC}")

base = int(input("Digite a base do seu triângulo"))
Altura = int(input("Digite a altura do seu triângulo"))
area = base * Altura / 2
print(f"A sua área é: {area}")

preco = int(input("Digite o preço do produto"))
desconto = preco - (preco * 0.1)
print(f"O preço do produto com 10% de desconto é: {desconto}")


nomeV = input("Digite o nome do vendedor: ")
carro = int(input("Digite a quatidade de carros vendidos: "))
vendas = int(input("Digite o valor total das vendas do vendedor: "))
comicao = carro * 200
salario = 2500
svendedor = salario + (comicao * 0.02)
print(f"O vendedro {nomeV} deve receber um salário: {svendedor}")

nA = int(input("Digite o primeiro número inteiro"))
nB = int(input("Digite o segundo número inteiro"))
print(f"O primeiro número é {nA}\nO segundo numero é {nB}")

x = nA

nA = nB

nB = x

print(f"A é igual a {nA}\nB é igual a {nB}")

numero1 = int(input("Digite um numero inteiro"))
resultado = numero1 // 100
print(resultado)