console.log("--AREA DE LOGIN--");

let user= "admin";
let senha= "1234";
let contadorS= 0;
let contadorU= 0;
let usuarioCorreto = false;

while (contadorU< 3){
  let usuarioDigitando = prompt("Digite seu nome de usuário: ");
   
   if(usuarioDigitando === user){
       console.log("Usuário correto!");
      usuarioCorreto = true;
       break;
   }else{
           contadorU++;
      console.log("Usuário incorreto!");
     
      if (contadorU === 3) {
      console.log("Não há mais tentativas para usuário.");
         }
        }
       } 
    if (usuarioCorreto) {
 while (contadorS < 3){
    let tentativaSenha =  prompt("Digite sua senha: ");
    
    if(tentativaSenha === senha){
    console.log("Acesso liberado!");
       break;
       }else{
      contadorS++;
           console.log("Tente novamente ");
           
      if(contadorS === 3)
         console.log("Número de tentativas excedidos");
    }
 }   
}
