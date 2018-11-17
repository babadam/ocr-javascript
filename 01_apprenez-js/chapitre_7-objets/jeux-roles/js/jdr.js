// alert('Hi');

// Création d'un personnage
var perso = {
    nom : "Aurora",
    sante : 150,
    force : 25,
    xp : 0,

    // renvoie la description du personnage
    decrire : function(){
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

// Etat du perso à un moment donné
console.log(perso.decrire());

// Aurora est bléssée par une flèche
perso.sante -= 20;
// Aurora trouve un bracelet de force
perso.force += 10;
//Aurora apprend une nouvelle compétence
perso.xp += 15;
// L'état du perso à changé
console.log(perso.decrire());

// Syntaxe général de la création d'un objet
// var monObjet = {
//     propriete1: valeur1,
//     propriete2: valeur2,
//     // ... ,
//     methode1: function(/* ... */) {
//         // ...
//     },
//     methode2: function(/* ... */) {
//         // ...
//     },
//     // ...
// };
//
// console.log(monObjet.propriete1); // Affiche la propriété propriete1 de monObjet
//
// console.log(monObjet.methode1(...)); // Affiche le résultat de l'appel de la méthode methode1 de monObjet
