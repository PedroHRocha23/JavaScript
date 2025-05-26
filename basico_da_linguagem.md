# JavaScript

- Amplamente utlizada pra desenvolvimento Web

- pode ser executada no frontend(javascript) ou no backend(node.js)

- Utilizado para criação de interações dinâmicas em páginas web


## Sintaxe

- Recomenda usar ";" no final de uma linha de código.

- Comentários de uma linha "//", comentários em bloco /**/

- Nomenclatura de variáveis seguem o camelCase

## Variáveis

- var -> pode ser reatribuída e redeclarada.

- let -> pode ser reatribuída, mas não redeclarada.

- const -> não pode ser reatribuída.

## Object

- Coleção de pares chave:valor
```javascript
let pessoa = { nome: "Carlos", idade: 30 };
```

## Array

- Lista ordenadas de valores:

```javascript
let numeros = [1,2,3,4];
```
## Comparativos

```javascript
console.log(10 == "10"); // true (valor)
console.log(10 === "10"); // false (valor e tipo)
console.log(10 != 5); // true
console.log(10 !== "10"); // true
```

## Ternário

```javascript
let idade = 18;
let status = idade >= 18 ? "Maior" : "Menor";
console.log(status); // "Maior"
```

## Condicionais if, else, else if

```javascript
let nota = 85;
if (nota >= 90) {
 console.log(“Super Aprovado!”);
} else (nota >= 70) {
 console.log(“Aprovado!”);
} else if {
 console.log(“Reprovado…”);
}
```

## Switch case

```javascript
let dia = 2;
switch (dia) {
 case 1:
    console.log(“Sábaado”);
    break;
 case 2:
    console.log(“Domingo”);
    break;
 default:
    console.log(“Dia de semana”);
```

## Loop for

```javascript
for (let i = 1; i <= 5; i++) {
 console.log(i);
}
let frutas = [“Maçã”, “Banana”, “Uva”];
for (let fruta of frutas) {
 console.log(fruta);
}
let pessoa = { nome: “Maçã”, idade: 25, cidade: “SP” };
for (let chave in pessoa) {
 console.log(chave + ": " + pessoa[chave]);
}
```

## Loop While

```javascript
let contador = 1;
while (contador <= 5) {
 console.log(contador);
 contador++; // Incremento que evita loop infinito
}
```

# Declaração de Funções

## Declaração Tradicional

```javascript
function saudacao(nome) {
 return "Olá, " + nome + "!";
}
console.log(saudacao("Ana")); // "Olá, Ana!"
```
## Valor Padrão

```javascript
function saudacao(nome = "Visitante") {
 return "Olá, " + nome + "!";
}
console.log(saudacao()); // "Olá, Visitante!”
```
## Anônimas

```javascript
let contador = 1;
const soma = function(a, b) {
 return a + b;
}
console.log(soma(3, 4)); //7
```
## Funções de Seta

```javascript
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 3)); // 6
```
## Funções dentro de funções

```javascript
function quadrado(x) {
 function multiplicar(y) {
 return y * y;
 }
 return multiplicar(x);
}
console.log(quadrado(4)); // 16
```