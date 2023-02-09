let personagem = document.querySelector('.mario');

function back(){
  if(personagem.classList != 'jump'){
    personagem.classList.add('jump');
  }
  setTimeout(function(){
    personagem.classList.remove('jump')
    
  },1000)
}

