
function main() {
    let a=document.querySelector("#tableau");
    let text=document.createElement("p");
    text.innerHTML="Titre de la page: "+document.title;
    let ligne=document.createElement("p");
    ligne.innerText="Nombre de lignes dans le tableau: "+(document.querySelector("#tableau").querySelectorAll("tr").length);
    let colonnes=document.createElement("p");
    let tr=document.querySelector("#tableau").querySelectorAll("tr");
    let td=document.querySelector("#tableau").querySelectorAll("td");
    colonnes.innerText="Nombre de colonnes dans le tableau: "+parseInt((td.length)/(tr.length)+1);
    let semestre=document.createElement("p");
    semestre.innerText="Nombre de semestres: "+parseInt(tr/2);
    let note1;
    let note2;
    for (let i=0;i<td.length;i++) {
        let colonne1=td[i];
        let colonne2=td[i + 1];
        if (colonne1.innerText=="S5"&&colonne2.innerText=="E1") {
            note1=td[i + 2];
            note2=td[i + 5];
            td[i + 2].innerText=parseInt(note1.innerText)+2;
            td[i + 2].className="red";
        }
    }
    let noteE1 = document.createElement("p");
    noteE1.innerText = "Note au S5 de E1: " + note1.innerText;
    let noteE2 = document.createElement("p");
    noteE2.innerText = "Note au S5 de E2 : " + note2.innerText;
    let retourligne=document.createElement("br");
    let zone = document.createElement("p");
    zone.innerText = "Zone de texte: ";
    let zonetexte=document.createElement("textarea");
    a.appendChild(text);
    text.appendChild(ligne);
    ligne.appendChild(colonnes);
    colonnes.appendChild(semestre);
    semestre.appendChild(noteE1);
    noteE1.appendChild(noteE2);
    noteE2.appendChild(retourligne);
    noteE2.appendChild(zone);
    noteE2.appendChild(zonetexte);
}

main();