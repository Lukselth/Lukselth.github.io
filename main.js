function cadastro(){
  let nome = document.getElementById("nomeInput").value;
  let email = document.getElementById("emailInput").value;
  nome = nome.toLowerCase();
 if(nome == null ||  nome == ""){
   let text = document.getElementById("texto");
   text.innerHTML = "O campo não pode estar vazio!";
   text.style.color = "red";
 }
 setTimeout(function(){
   let text = document.getElementById("texto");
   text.innerHTML = "";
 },2000)
}