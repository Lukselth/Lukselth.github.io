let inputNome = document.getElementById("inputNome");
let inputEmail = document.getElementById('inputEmail');
function verificaInput(){
  if((inputNome !== "") && (inputNome !== null) && (inputNome !== undefined)){
    inputNome.value = "";
  }
 if((inputEmail !== "") && (inputNome !== null) && (inputEmail !== undefined)){
   inputEmail.value = "";
 }
localStorage.setItem("Nome",inputNome);
}

