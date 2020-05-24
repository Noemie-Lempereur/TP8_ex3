
function haut() { 
    let e=document.getElementById("image");
    e.style.backgroundPosition="top";
}

let hau=document.getElementById("haut");
hau.addEventListener("click", haut);

function bas() { 
    let e=document.getElementById("image");
    e.style.backgroundPosition="bottom";
}

let ba=document.getElementById("bas");
ba.addEventListener("click", bas);

function droite() { 
    let e=document.getElementById("image");
    e.style.backgroundPosition="right";
}

let dr=document.getElementById("droite");
dr.addEventListener("click", droite);

function gauche() { 
    let e=document.getElementById("image");
    e.style.backgroundPosition="left";
}

let ga=document.getElementById("gauche");
ga.addEventListener("click", gauche);

let pop;

function Ouvrirpop(){
    pop=window.open("https://fr.wikipedia.org/wiki/Rink_hockey");
}

let ouvrir=document.getElementById("ouvrirpop");
ouvrir.addEventListener("click",Ouvrirpop);


function Fermerpop(){
    pop.close();
}

let fermer=document.getElementById("fermerpop");
fermer.addEventListener("click",Fermerpop);
