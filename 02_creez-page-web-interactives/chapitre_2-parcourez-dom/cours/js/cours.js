// 1. Slectionner des éléments

// Sélection d'élements selon leur balise
var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche le nombre de titre h2 soit 3

// Séléction d'éléments selon leur classe
var merveilleElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveilleElts.length; i++){
    console.log(merveilleElts[i]);
}

// Séléction d'un élément selon son ID
console.log(document.getElementById("nouvelles"));

// Séléction d'un élément à partir d'un selecteur CSS
// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length); // Affiche 1; syntaxe lourde

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous le paragraphes à l'intérieur de l'élément identifié par 'contenu'
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe 'existe'
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Le premier paragraphe
console.log(document.querySelector("p"));


// 2. Obetenir des informations sur les éléments

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// Les attributs
// L'atttribut hfre du premier lien
console.log(document.querySelector("a").getAttribute("href"));

// L'identifiant de la première liste via propriété
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

// Vérifier la présence d'un attribut sur un élément
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

// Les classes
// liste des classe de l'élément identifié par antique
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche 'merveilles'
