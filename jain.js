let inputName = document.getElementById("inputNome");
let inputEmail = document.getElementById("inputEmail");
  
function verificaInput(){
  
localStorage.setItem("nome", inputName.value);
localStorage.setItem("email", inputEmail.value);
  let names =+ localStorage.getItem("nome");
  let emails =+ localStorage.getItem("email")
  console.log(names,emails);
  
  if((inputName !== "") && (inputName !== null) && (inputName !== undefined)){
    inputName.value = "";
  }
 if((inputEmail !== "") && (inputEmail !== null) && (inputEmail !== undefined)){
   inputEmail.value = "";
 }
 

}

  