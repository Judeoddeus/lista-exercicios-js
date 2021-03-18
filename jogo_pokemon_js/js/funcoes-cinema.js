function Esconder(){
     // $("#resumo").fadeIn();
}

    //$("#resumo").toggle(); // inverte 
     //$("#resumo").show(); // para aparecer
    // $("#resumo").hide();
    
    //$("#resumo").slideToggle();
    // $("#resumo").slideDown();
    //$("#resumo").slideToggle();
    
    // $("#resumo").fadeToggle(1000);
    // $("#resumo").fadeIne(1000)
    // $("#resumo").fadeOut(1000)


$(".swipebox").swipebox();

function retornarEndereco(){
    let cep = $("#cep").val();
    let url = "https://viacep.com.br/ws/" + cep + "/json";
    
    $.getJSON(url,function(dados){
        $("#endereco-completo").append("Rua: " + dados.logradouro + "<br>");
        $("#endereco-completo").append("Cidade: " + dados.logradouro + "<br>");
    });
}

document.querySelector("#BuscarCep").addEventListener("click",function(){
    retornarEndereco();
});