let n1 = parseInt(prompt("Digite o primeiro número: "));
let n2 = parseInt(prompt("Digite o segundo número: "));
let n3 = parseInt(prompt("Digite o terceiro número: "));
let n4 = parseInt(prompt("Digite o quarto número: "));
let n5 = parseInt(prompt("Digite o quinto número: "));

const numeros= [ n1 , n2 , n3 , n4 , n5 ];
const positivos= numeros.filter(num => num > 0)
const contador= positivos.length;
console.log(contador);


