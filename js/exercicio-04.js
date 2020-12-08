function IdadeMaiorMenor(){
    let idade = parseInt(document.getElementById("idade").value);
    
    document.getElementById("resultado").innerText = idade;
    
    if(idade >= 18){
        document.getElementById("mensagem").innerText = "Maior"
    }else {
        document.getElementById("mensagem").innerText = "Menor"
    }
}