let divHeader = document.getElementsByTagName("HEADER");
let divMenu = document.getElementsByClassName("menu");
let divConteudo = document.getElementsByClassName("conteudo");
let div8 = document.createElement("DIV");

let divNova = '8 - dolor sit amet consectetur, adipisicing elit. Earum fuga labor';

div8.innerHTML = divNova;

divHeader[0].style.backgroundColor = "red";
divHeader[0].style.color = "white";
divHeader[0].innerHTML = "<h1>Seu Moa na Area</h1";

//console.log(divConteudo[0]);

divMenu[0].children[2].innerHTML = "VENDAS";

divConteudo[0].appendChild(div8);