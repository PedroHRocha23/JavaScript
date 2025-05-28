const somar = (a,b) => a + b;
const subtrair = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;

let opcao = 4;

let a = 10;
let b = 2;
let resultado;

if(opcao == 1){
    resultado = somar(a,b);
}else if(opcao == 2){
    resultado = subtrair(a,b);
}else if(opcao == 3){
    resultado = multiplicar(a,b);
}else if(opcao == 4){
    resultado = dividir(a,b);
}else{
    resultado = "Opção inválida";
}

console.log(resultado);
