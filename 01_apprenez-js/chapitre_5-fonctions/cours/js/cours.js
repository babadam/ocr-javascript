// alert('Hi');

// function direBonjour(){
//     console.log("Bonjour ! ");
// }

function direHello(){
    return "Hello !";
}

console.log("Début du programme");

//possibilité de déclarer une variable à l'intérieur d'une fonction
function direSalam(){
    var msg = "Salam !";
    return msg;
}

// modifions exemple afin de construire un message de bienvenue personnalisé
function direBonjour(prenom){
    var message = "Bonjour, " + prenom + " !";
    return message;
}

direBonjour();
var resultatHello = direHello();
console.log(resultatHello);
console.log(direSalam());
//console.log(msg); // Erreur : la varible n'exitse pas ici
console.log(direBonjour("Adam"));
console.log(direBonjour("Assad"));

console.log("Fin du programme");
