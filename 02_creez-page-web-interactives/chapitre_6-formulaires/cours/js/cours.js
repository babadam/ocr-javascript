// alert('Hi');

/******  I. Les zones de texte ******/

/*** 1) Accès à la valeur saisie ***/
// change la valeur affichée dans la zone de texte
var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

/*** 2) Gestion du focus ***/
// Affichage d'un msg contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du msg contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function () {
    document.getElementById("aidePseudo").textContent = "";
});
// Focus sur la zone de saisie du pseudo
pseudoElt.focus();


/****** II. Les éléments d'options ******/

/*** 1) Les cases à cocher ***/
// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

/*** 2) Les boutons radio ***/
// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for ( var i=0; i<aboElts.length; i++){
    aboElts[i].addEventListener("change", function (e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

/*** 3) Listes déroulantes ***/
// Affichage de code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
});


/******  III. Le Formulaire comme élément du DOM ******/

/*** 1) Accès aux champs du formulaire ***/
var form = document.querySelector("form");
console.log("Nombre de champs saisie : " + form.elements.length); // Affiche 10
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password"

/*** 2) Soumission du formulaire ***/
// Affichage de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});
