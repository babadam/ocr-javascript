// alert("Hi");

console.log("ABC".length);
console.log("Je suis une chaîne.".length);

// .length appliqué sur des variables et resultat stocké lui mm dans une variable
var mot = "Kangourou";
var longueurMot = mot.length;
console.log(longueurMot);

// convcertir en minuscule ou majuscule
var motInitial = "Bora-Bora";

var motEnMinuscule = motInitial.toLowerCase();
console.log(motEnMinuscule);
var motEnMajuscule = motInitial.toUpperCase();
console.log(motEnMajuscule);

// comparaison de deux chaînes
var chaine = "azerty";
console.log( chaine === "azerty"); // renvoie TRUE
console.log( chaine === "qwerty"); // renvoie FALSE
// /!\ sensible à la casse
console.log( chaine === "Azerty"); // renvoie FALSE

// conversion en maj. ou miin. pour comparer des chaînes
var saisie = "Quitter";
console.log( saisie === "quitter"); // renvoie FALSE
console.log( saisie.toLowerCase() === "quitter"); // renvoie TRUE

// acceder à un caractère dans une chaîne
var sport = "Tennis-ballon";
console.log(sport.charAt(0));
console.log(sport[0]);
console.log(sport.charAt(6));
console.log(sport[6]);

// acceder au dernier caractère
var longeurSport = sport.length;
console.log(sport[longeurSport - 1]); // affiche n
console.log(sport[longeurSport]); // affiche undifined : longueur dépassée.

// parcourir chaine caractère par caractère

//-- 1ere solution : acceder successivement à chaque caractère
var prenom = "Barbara";
console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);
console.log(prenom[5]);
console.log(prenom[6]); // peut être très long !!

//2ème solution : une boucle
for( i = 0; i < prenom.length; i++){
    console.log(prenom[i]); // renvoie le caracère ayant le meme indice que i
}
