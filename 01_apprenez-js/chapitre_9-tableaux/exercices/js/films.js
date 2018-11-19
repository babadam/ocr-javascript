// alert('Hi');


// --1 création objet film comme prototype pour tous les films
var Film = {
    // Initialise le film
    init : function( titre, annee, realisateur){
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    // description du film
    decrire : function(){
        var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
        return description;
    }
};

// -- Création des objet film(n) avec prototype FILM
var film1 = Object.create(Film);
film1.init("Titanic", 1997, "James Cameron");
var film2 = Object.create(Film);
film2.init("Django", 2012, "Quentin Tarentino");
var film3 = Object.create(Film);
film3.init("Divergente", 2015, "Théo James");

// -- Création tableaux films, inssertion dedans et affiche description

var films = [film1, film2, film3];

films.forEach(function (film){
    console.log(film.decrire());
});
