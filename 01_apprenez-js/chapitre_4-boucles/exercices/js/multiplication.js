// alert('Hi');

// var saisi = Number(prompt("Saisissez un nombre pour connaître sa table de multiplication ( 0 à 10)"));
//
// console.log("Voici la table de multiplication de " + saisi);
// for(i=0; i <= 10; i++){
//     console.log(saisi + " x " + i + " = " + (saisi*i));
// }

// Améliorez le programme pour le nombre saisi soit comprit entre 2 et 9

var saisi = 0

while( (saisi<2) || (saisi>9) ){
    saisi = Number(prompt("Saisissez un nombre entre 2 et 9"));
    }
    console.log("Voici la table de multiplication de " + saisi);
    for(i=0; i <= 10; i++){
        console.log(saisi + " x " + i + " = " + (saisi*i));
    }
