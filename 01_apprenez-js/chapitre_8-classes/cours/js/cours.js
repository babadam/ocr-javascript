// alert('Hi');

var unObjet = {
    a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);
console.log(unAutreObjet.a); // affiche 2

// Crée encoreUnObjet avec unAutreObjet comme prototype
var encoreUnObjet = Object.create(unAutreObjet);
console.log(encoreUnObjet.a); // affiche 2
console.log(encoreUnObjet.b); // affiche undifined car aucune propriété b n'existe dans aucun des objet 
