let num = parseInt(prompt("Digite um número inteiro positivo: "));
let result = 1;

if( num < 0 ){
  console.log("Não existe fatorial de número negativo");
}else{
for(let i = 1; i <= num; i++){
  result *= i;

}
  console.log("A fatorial do número " + num + " é igual : " + result);
 
}
  
