// alert('Hi');

// fonction pour afficher clic ! dans la console au moement du clic sur le bouton
function clic(){
    console.log("Clic !");
}
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement clik
boutonElt.addEventListener("click", clic);

// syntaxe pus concise
 // var boutonElt = document.getElementById("bouton");
 // boutonElt.addEventListener("click", function () {
 //     console.log("clic");
 // })

// Suppresion de l'élément
boutonElt.removeEventListener("click", clic);

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événements
document.getElementById("bouton").addEventListener("click", function (e){
    console.log("Evènement : " + e.type + ", texte de la cible : " + e.target.textContent);
});

// Appui sur une touche du clavier
document.addEventListener("keypress", function (e){
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
})

// Affiche des infos sur un événement clavier
function infosClavier(e){
    console.log("Evénement clavier : " + e.type + ", touche : " + e.keyCode);
}
//Gestion de l'appui et du relâchement d'une touche iclavier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

// **** Affiche les infos sur tous les evenements click déclanchés sur la page

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code){
    var bouton = "inconnu";
    switch (code) {
    case 0 : // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1 : // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2 : // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des infos sur un evenement souris
function infosSouris(e){
    console.log("Evenement souris : " + e.type + ", bouton " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}
//Gestion du clic
document.addEventListener("click", infosSouris);
// Gestion de l'appui et du relachement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

// ** FIN

// Gestion de la fin du chargement de la page web : affiche un msg quand la page est entièrement chargéelse
window.addEventListener("load", function () {
    console.log("Page entièrement chargée.");
});

// GEstion de la fermeture de la page
window.addEventListener("beforeunload", function (e){
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation standard
    return message; // Provoque une demande de confirmation (certain navigateurs)
})

// -- V -- Aller plus loin avec les événements

// -- 1 Comprendre la propagation des événements
// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
})
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
})

// -- 2 Modifier le comportement par défaut en cas d'événement
// Gestion de clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plut^t à lire le cours");
    e.preventDefault(); // Annule la navigation vers la cible du lien
});
