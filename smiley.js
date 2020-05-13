function get2DContext(id){
    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    return context;
}

function canvasApp(){
    let context = get2DContext("id1");
    context.beginPath();
    context.lineWidth = 3;
    context.fillStyle="yellow";
    context.arc(100, 100, 75, 0, 2*Math.PI);
    context.fill();
    context.closePath();
    context.stroke();

    context.beginPath();
    context.fillStyle="black";
    context.arc(65, 70, 10, 0, 2*Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle="black";
    context.arc(135, 70, 10, 0, 2*Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.lineWidth = 6;
    context.arc(99, 120, 35, 0, Math.PI);
    context.stroke();
    context.closePath();

    context.font = "20px serif";
    context.fillText("Hello Canvas!", 45, 200);
}

function displayDateTime(){
    let a=document.body;
    let date = new Date();
    let jour=date.getDate();
    let mois=date.getMonth();
    let day=date.getDay();
    let annee=date.getUTCFullYear();
    let secondes=date.getSeconds();
    let minutes=date.getMinutes();
    let heures=date.getHours();
    let jour_semaine=new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');
    let mois_noms=new Array('décembre', 'janvier', 'février', 'mars', 'avril', 'mai','juin','juillet','août','septembre','octobre','novembre');
    let text=document.createElement("p");
    text.innerHTML="Nous sommes le "+jour_semaine[day]+" "+jour+" "+mois_noms[mois]+" "+annee;
    let text2=document.createElement("p");
    text2.innerHTML="Il est actuellement "+heures+":"+minutes+":"+secondes;
    a.appendChild(text);
    text.appendChild(text2);
}

function main() {
    canvasApp();
    displayDateTime();
}

main();