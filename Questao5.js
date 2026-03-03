let n1 = Number(prompt("De sua primeira nota: "));
let n2 = Number(prompt("De sua segunda nota: "));
let n3 = Number(prompt("De sua terceira nota: "));
let nsoma = Number(n1 + n2 + n3);
let ntotal = Number(nsoma/3);

if(ntotal >= 7){
    console.log("Você está aprovado!")
    
}else if(ntotal >=5 && ntotal <7){
    console.log("Você está de recuperação.")
}else{
    console.log("Você está reprovado")
}
console.log("sua média é: " + ntotal.toFixed(1));
