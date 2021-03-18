let fotos = ["foto1.png", "foto2.png", "foto3.png"];
let legendas = ["Homem Aranha", "Vingadores", "Capitã Mavel"];

function TrocarFoto(foto){
    document.querySelector(".imagen-banner").src = "imagens/" + fotos[foto];

    document.querySelector(".legenda").innerText = "imagens/" + legendas[foto];
}

let fotoAtual = 0;
TrocarFoto(fotoAtual);

setInterval(function(){
    fotoAtual++;
    if(fotoAtual > 2){
        fotoAtual = 0;
    }

    TrocarFoto(fotoAtual);
}, 3000);

document.querySelector("#btFoto1").addEventListener("click", function(){
    TrocarFoto(0);
});

document.querySelector("#btFoto2").addEventListener("click", function(){
    TrocarFoto(1);
});

document.querySelector("#btFoto3").addEventListener("click", function(){
    TrocarFoto(2);
});