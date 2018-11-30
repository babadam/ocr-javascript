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
