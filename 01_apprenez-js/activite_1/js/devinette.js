/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var saisie = "";
var essai = 1;

while( essai <= 6){
    saisie = Number(prompt("Devines le nombre auquel je pense :"));
        if( saisie < solution){
            console.log( saisie + " est trop petit");
        } else if ( saisie > solution){
            console.log( saisie + " est trop grand");
        } else{
            console.log( "Bravo ! La solution était " + solution + ".");
            console.log("Vous avez trouvé en " + essai + " essai(s).");
            essai = 7; // pour sortir du while si je trouve en moins de 6 essais.
        }
    essai++
    if( essai == 7){
        console.log("Perdu... La solution était " + solution + ".");
    }
}
