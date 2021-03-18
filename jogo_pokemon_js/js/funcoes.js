let pokemon = ["p1.png", "p2.png", "p3.png", "p4.png"];
let pokemonNome = ["Psyduk", "Charmander", "Pikachu", "Squirtle"];

//Faz o sorteio randomicamente Math.floor é para deixar os números inteiros
//Math.random sorteia números aleatórios
//* pokemon.length para não deixar ultrapassar a quantidade de tem no array
let sorteio = Math.floor(Math.random() * pokemon.length);

document.querySelector(".pokemon-foto").src = "../imagens/" + pokemon[sorteio];

//GERAR BOTÕES
function GerarBotoes(){
    let botao = "";
    for(let i = 0; i < pokemon.length; i++){
        botao += "<button onclick= \"Revelar('" + pokemonNome[i] + "');\">" + pokemonNome[i] + "</button>";
    }
    document.querySelector("#botoes").innerHTML = botao;
}

function Revelar(nome){
    if(nome == pokemonNome[sorteio]){
        alert("Parabéns, você acertou!");
        }else{
            alert("Que pena, tente novamente.");
        }
        document.querySelector(".pokemon-foto").style = "filter:brightness(1)";
        document.querySelector("#pokemon-nome").innerText = pokemonNome[sorteio];
    }
    

function Ajuda(){
    let html = "";
    let imagem = "";
    for(let i = 0; i < pokemon.length; i++){
        imagem = "<img src='imagens/" + pokemon[i] + " '>";
        html += "<span>" + imagem + "<br>" + pokemonNome[i] + "</span>";
    }
    document.querySelector("#pokemon-ajuda").innerHTML = html;
}


