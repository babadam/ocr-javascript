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


function possede(id, classe){
    if (document.getElementById(id).hasAttributes(classe)){
        console.log("True")
    } else {
        console.log("False");
    }
}
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
