// alert("Hi");

console.log(document.body.childNodes[5].childNodes[1]);

var titreElements = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titreElements[0]); // affiche le premier h2
console.log(titreElements.length); // affiche 3

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles")
for ( var i=0; i<merveillesElts.length; i++){
    console.log(merveillesElts[i]);
}

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Tous les paragraphes
console.log(document.querySelectorAll("p").length);
// Tous les paragraphes à l'interieur de l'élement identifié par contenu
console.log(document.querySelectorAll("#contenu p").length);
// Tous les élélents ayant la class "existe"
console.log(document.querySelectorAll(".existe").length);

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Le premier paragraphe
console.log(document.querySelector("p"));

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);
// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribue href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);
// L'attribut href du premier lien
console.log(document.querySelector("a").href);

// Vérification présence attribut
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}
