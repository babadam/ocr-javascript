// alert('Hi');

// for( i=1; i<=10; i++){
//     console.log("C'est le tour de manège n°" + i);
// }
//
// var tour = 1;
// while( tour <= 10){
//     console.log("C'est le tour de manège n°" + tour);
//     tour++;
// }

// Améliorez le programme pour que le nombre soit saisi par l'utisateur
 var saisi = Number(prompt("Combien de tours veux-tu faire, mon petit"));
 var compteur = 1;
while( compteur <= saisi){
    console.log("C'est le tour de manège n°" + compteur);
    compteur++;
}
