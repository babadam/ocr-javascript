// alert('Hi');

// Création d'un objet littéral
var stylo = {
    type : "bille",
    couleur : "bleu",
    marque : "Bic"
};

// Création d'un objet à l'aide un constructeur

// Constructeur MonObjet
function MonObjet (){
    // Initialisation de l'objet
    // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

// Utilisation d'un objet
console.log(stylo.type); // affiche "bille"
console.log(stylo.couleur); // affiche "bleu"
console.log(stylo.marque); // affiche "Bic"
// Autre syntaxe pour acceder aux propriétés d'un objet
console.log(stylo['type']);
console.log(stylo['couleur']);
console.log(stylo['marque']); // mm résultats

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Modification d'un objet
stylo.couleur = "rouge";
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Ajout de nouvelles propriétés à un objet déja créé
stylo.prix = 1.9; // ajout de la propriété prix à l'objet stylo
console.log("Il coûte " + stylo.prix + " euros");
