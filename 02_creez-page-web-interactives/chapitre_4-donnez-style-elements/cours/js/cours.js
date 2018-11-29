// alert('Hi');

// selectionne premier paragraphe et le modfie
var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
// nom propriété composé -> retirer tiret et mettre en camelCase
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

// Les limites de la propriété style en JS
var paragrapheElts = document.getElementsByTagName("p");
console.log(paragrapheElts[0].style.color); // Affiche "red"
console.log(paragrapheElts[1].style.color); // Affiche "green"
console.log(paragrapheElts[2].style.color); // N'affiche rien
// N'aafiche rien elle la propriété style ne peut pas aacder aux feuilles de css

// L'exemple suivant afficher certaines propriétés CSS du 3eme paragraphe
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);
