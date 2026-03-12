console.log("--AREA DE LOGIN--");

let user= "admin";
let senha= "1234";
let contadorS= 0;
let contadorU= 0;

while (contadorU< 3){
  let usuarioDigitando = prompt("Digite seu nome de usuário: ");
   
   if(usuarioDigitando === user){
       console.log("Usuário correto!");
       break;
   }else{
           console.log("Usuario incorreto")
        for (contadorU = 1 ; contadorU <3 ; contadorU++){
             console.log("Não há mais tentativas restantes!");
             break;
        }
       }
       contadorU++;
} 
 while (contadorS < 3){
    let tentativaSenha =  prompt("Digite sua senha: ");
    
    if(tentativaSenha === senha){
    console.log("Acesso liberado!");
       break;
       }else{
           console.log("Tente novamente ");
       }
       contadorS++
       
}
