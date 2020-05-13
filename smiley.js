function get2DContext(id){
    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    return context;
}

function canvasApp(){
    let context = get2DContext("id1");
    context.beginPath();
    context.arc(300, 100, 200, Math.PI/4, Math.PI);
    context.closePath();
    context.stroke();
}


function main() {
    canvasApp();
}

main();