let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2= parseInt(prompt("Digite o segundo número: "));
let escolha= parseInt(prompt(" Escolha uma das opções : 1- SOMA    2- SUBTRAÇÃO    3- MULTIPLICAÇÃO    4- DIVISÃO  "));

switch(escolha){
  case 1:
  console.log(num1+num2);
    break;
    case 2:
  console.log(num1-num2);
    break;
    case 3:
  console.log(num1*num2);
    break;
    case 4:
  console.log(num1/num2);
    break;
} 
