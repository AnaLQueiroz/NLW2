//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click',cloneFild) //adição de um evento de escuta (listener =alguém que ouve ),ela espera dois argumentos, o primeiro é o evento que ele deve ouvir
                                    //O segundo é a ação que eu devo fazer no evento, essa é uma ação que o programador cria



//Executar uma ação
function cloneFild(){
      //Duplicar os campo. Qual campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')
   
    //para cada campo, deve limpar o mesmo
    fields.forEach(function(fieldDoMomento){
        //pegar o fild do momento
         fieldDoMomento.value = ""
    })

    //Colocar na página: onde??
   document.querySelector('#schedule-items').appendChild(newFieldContainer);


}

  