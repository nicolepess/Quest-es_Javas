let soma = 0;
let numero;

while (true) {
  numero = Number(prompt("Digite um número (0 para parar):"));

  if (numero === 0) {
    break;
  }

soma = soma + numero;
}

alert("A soma dos números digitados é: " + soma);
