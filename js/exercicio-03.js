function Testa100(){
    let numero = parseInt(document.getElementById("numero").value);
    
    document.getElementById("resultado").innerText = numero;

    if(numero == 100){
        document.getElementById("mensagem").innerText = " == 100"
    }else if(numero > 100){
        document.getElementById("mensagem").innerText = "> 100"
    }else{
        document.getElementById("mensagem").innerText = "< 100"
    }
    
}