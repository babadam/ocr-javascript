// alert('Hi');

// function perimetre(){
//     calcul = 2 * Math.PI * rayon;
//     return calcul;
// }
//
// function aire(){
//     calcul = Math.PI * (rayon*rayon);
//     return calcul;
// }
// var rayon = Number(prompt("Saisissez le rayon de votre cercle pour trouvez son périmètre et son aire : "));
// var resultatP = perimetre();
// var resultatA = aire();
//
// console.log("Son périmètre vaut " + resultatP);
// console.log("Son aire vaut " + resultatA);


// Correction
// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
    return 2 * rayon * Math.PI;
}

// Renvoie l'aire d'un cercle
function aire(rayon) {
    return Math.pow(rayon, 2) * Math.PI;
}

var r = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre(r));
console.log("Son aire vaut " + aire(r));
