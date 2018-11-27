// alert('Hi');

// Ce que j'ai fait
// function infosLiens(noeud){
//      console.log(document.getElementsByTagName(noeud).length);
//      console.log(document.querySelector(noeud));
//      var liens = [document.getElementsByTagName(noeud)];
//      var dernierLien = liens.length - 1;
//      console.log(dernierLien);
//      // for (i=0; i<document.getElementsByTagName(noeud).length; i++){
//      //     console.log("Bla");
//      // }
//
// }

// Correction
function infosLiens(){
    var lienElets = document.getElementsByTagName("a");
    var nbLiens = lienElets.length;
    console.log(nbLiens);

    if(nbLiens > 0){
        console.log(lienElets[0].getAttribute("href"));
        console.log(lienElets[nbLiens - 1].getAttribute("href"));
    }
}
infosLiens();

function possede(element, classe){
    var instrument = document.getElementById(element);
    if ( instrument !== null){
        console.log(instrument.classList.contains(classe));
    } else {
        console.error("La classe " + classe + " n'existe pas");
    }
}
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
