function Soma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let soma =( numero1 + numero2);

    document.getElementById("resultado").innerText = soma;

    if(soma > 0){
        document.getElementById("mensagem").innerText = "Positivo"
    }else if(soma == 0){
        document.getElementById("mensagem").innerText = "Neutro"
    }else{
        document.getElementById("mensagem").innerText = "Negativo"
    }
}