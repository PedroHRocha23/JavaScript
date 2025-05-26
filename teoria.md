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