// alert('Hi');

// Créer une fonction qui compte le nombre de voyelles et consonnes dans le mot
function compterNbVoyelles(mot){
    var voyelle = "0";
    for(i=0; i<mot.length; i++){
        if(mot[i] === "a" || mot[i] === "A" || mot[i] === "e" || mot[i] === "E" || mot[i] === "i" || mot[i] === "I" || mot[i] === "o" || mot[i] === "O" || mot[i] === "u" || mot[i] === "U" || mot[i] === "y" || mot[i] === "Y"){
            voyelle++;
        }
    }
    return voyelle;
}

// fonction pour inverser le mot
function inverser(mot){
    var motInverser = "";
    for(i=0; i<mot.length; i++){
        motInverser = mot[i] + motInverser;
    }
    return motInverser;
}

// convertir en leetspeak

function convertirEnLeetSpeak(mot){
    var motLeet = "";
    for(i=0; i<mot.length; i++){
        motLeet = motLeet + trouverUneLettre(mot[i]);
    }
    return motLeet;
}

function trouverUneLettre(lettre){
    var lettreLeet = lettre;
    switch (lettre) {
        case "a":
        lettreLeet = "4";
        break;
        case "b":
        lettreLeet = "8";
        break;
        case "e":
        lettreLeet = "3";
        break;
        case "l":
        lettreLeet = "1";
        break;
        case "o":
        lettreLeet = "0";
        break;
        case "s":
        lettreLeet = "5";
        break;
    }
    return lettreLeet;
}
var motSaisi = prompt("Saisissez un mot :");
var nbVoyelles = compterNbVoyelles(motSaisi);
var nbConsonnes = motSaisi.length - nbVoyelles;

console.log("Le mot " + motSaisi + " contient " + motSaisi.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());
console.log("Il contient " + nbVoyelles + " voyelles et " + nbConsonnes + " consonnes");
console.log("Il s'écrit à l'envers : " + inverser(motSaisi));

if(motSaisi.toLowerCase() === inverser(motSaisi).toLowerCase()){
    console.log( motSaisi + " est un palindrome");
} else {
    console.log( motSaisi + " n'est pas un palindrome");
}

var motLeetSpeak = convertirEnLeetSpeak(motSaisi);
console.log("Il s'écrit en leet speak " + motLeetSpeak);
