// alert('Hi');

var mots = []; // déclaration du tableau mot
var mot = "";

while( mot.toLowerCase() !== "stop"){
    mot = prompt("Saisissez un mot ou tapez stop pour arrêter :");
    if( mot !== "stop"){
        mots.push(mot);
    }
}

// Boucle For
// for( i=0; i<mots; i++){
//     console.log(mots[i]);
// }

// Boucle forEach
mots.forEach(function (mot) {
    console.log(mot);
}) ;
