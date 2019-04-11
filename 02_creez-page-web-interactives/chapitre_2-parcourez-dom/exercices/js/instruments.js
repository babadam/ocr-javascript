// Créer fonction infosLiens() qui affiche le nb total de liens dans la page et la cible du premier et dernier lien

// Donc compter le nombre de li de facon dynamique
// Cible premier et dernier lien de facon dynamique avec boucle


function infosLiens(element){
    var liensElts = document.querySelectorAll(element);
    console.log(liensElts.length);
    console.log(liensElts[0].href);
    console.log(liensElts[liensElts.length - 1].href);
}

function possede(id, classe){
    var liens = document.getElementById(id);
    if(liens !== null){
        var liensClasse = liens.classList.contains(classe);
        console.log(liensClasse);
    } else{
        console.error("Aucun élément ne possède l'identifiant contrebasse");
    }
}


infosLiens("li a");
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur


/**** Correction OPR ******/
// Affiche des informations sur les liens
// function infosLiens() {
//     var liensElts = document.getElementsByTagName("a");
//     var nombreLiens = liensElts.length;
//     console.log(nombreLiens);
//
//     if (nombreLiens > 0) {
//         console.log(liensElts[0].getAttribute("href"));
//         console.log(liensElts[nombreLiens - 1].getAttribute("href"));
//     }
// }
//
// // Affiche si un élément possède une classe
// function possede(id, classe) {
//     var instrument = document.getElementById(id);
//     if (instrument !== null) {
//         console.log(instrument.classList.contains(classe));
//     } else {
//         console.log("Aucun élément ne possède l'identifiant " + id);
//     }
// }
//
// infosLiens();
//
// possede("saxophone", "bois"); // Doit afficher true
// possede("saxophone", "cuivre"); // Doit afficher false
// possede("trompette", "cuivre"); // Doit afficher true
// possede("contrebasse", "cordes"); // Doit afficher false
