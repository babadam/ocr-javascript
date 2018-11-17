// alert('Hi');

function perimetre(r){
    return 2 * Math.PI * r;
}

function aire(r){
    return  Math.PI * (r * r);
}

var rayon = Number(prompt("Saisissez le rayon du cercle pour connaître son périmètre ainsi que son aire :"));

console.log("Le périmètre du cercle est de " + perimetre(rayon) + " cm");
console.log("L'aire du cercle est de " + aire(rayon) + " cm");
