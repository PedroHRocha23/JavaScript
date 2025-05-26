# Objetos em Javascript

- Em javascript um objeto é um coleção de pares chave:valor.

```javascript
 pessoa = {
 nome: "Ana",
 idade: 25,
 profissao: "Desenvolvedora"
};
console.log(pessoa.nome);
console.log(pessoa[“idade"]);
```

# Manipulação de objetos

## Adicionando e Alterando propriedades

```javascript
// Adicionando uma propriedade
pessoa.email = "ana@email.com";
// Alterando valor de propriedade existente
pessoa.idade = 26;
```
## Removendo propriedades

```javascript
delete pessoa.profissao;
```

## Métodos em Objetos

- Ojetos podem conter funções chamadas métodos.

```javascript
let usuario = {
 nome: "Carlos",
 saudacao: function() {
 return `Olá, meu nome é ${this.nome}!`;
 }
};
console.log(usuario.saudacao());
```

## Iterando sobre objetos

```javascript
// for...in
for (let chave in pessoa) {
 console.log(chave, pessoa[chave]);
}
// Object.keys() e Object.values()
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
```

# JSON

- JSON é um formato leve de troca de dados. Muito usado em APIs e armazenamento de dados.
Estrutura similar a objetos JS, mas com regras mais rígidas (chaves e strings sempre com aspas
duplas).

## Convertendo Ojeto para JSON

```javascript
let dados = {
 produto: "Celular",
 preco: 1500
};
let jsonDados = JSON.stringfy(dados);
console.log(jsonDados);
```

## Convertendo Json para Objeto

```javascript
let textoJSON = '{"cidade": "São Paulo", "populacao":12300000}';
let objeto = JSON.parse(textoJSON);
console.log(objeto.cidade);
```

