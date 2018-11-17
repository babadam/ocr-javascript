// alert('Hi');

var films = ["Titanic", "Divergente", "Django"];
console.log(films.length);

console.log(films[0]); //affiche "Titanic"
console.log(films[1]); // affiche "Divergente"
console.log(films[2]); // affiche "Django"
console.log(films[3]); // affiche undefined

// Parcourir éléments d'un tableau

// -- via boucle for
for (var i =0; i<films.length; i++){
    console.log(films[i]);
}

// -- via methode foreach
films.forEach(function(film){
    console.log(film);
}); // mm resultat

// ajouter un élément dans un tableau
films.push("Les Bronzés");
console.log(films[3]); // affiche désormais "Les Bronzés"

// Tableaux d'objets
var film = {
    // Initialise le film
    init : function(titre, annee){
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire : function(){
        var description = this.titre + " (" + this.annee +")";
        return description;
    }
};
var film1 = Object.create(film);
film1.init("Titanic", 1997);
var film2 = Object.create(film);
film2.init("Django", 2012);
var film3 = Object.create(film);
film3.init("Divergente", 2015);

// On peut créer un tableau films contenant nos objets
var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});
