/**** MODIFIER ELEMENT EXISTANT ****/

/*** Le contenu HTML ***/
// Modification du contenu HTML de la liste : ajour d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// innerHTML est souvent utilisé pour vider un contenu et est reservé pour de petite modif
// Suppression du contenu HTML de la liste
// document.getElementById("langages").innerHTML = "";/

/*** Le contenu textuel ***/
// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

/*** Les attributs ***/
// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
document.querySelector("h1").id = "titre"; // mm chose

/*** Les classes ***/
var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppresion de la classe 'début'
titreElt.classList.add("titre"); // Ajout de la classe 'titre'
console.log(titreElt);


/**** AJOUTER UN NOUVEL ELEMENT ****/
// L'ajout d"un nouvel élément à une page web peut se décomposer en 3 opérations :
//    1. Création du nouvel élément
//    2. Définition des informations de l'élément
//    3. Insertion du nouvel élément dans le DOM

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son id
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément


/**** VARIANTES POUR AJOUTER UN ELEMENT ****/

var rubyElt = document.createElement("li");// Création d'un élément li
rubyElt.id = "ruby"; // Définition de son ID
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son ID
perlElt.appendChild(document.createTextNode("perl")); // Définition de son contenu textuel
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin",
    '<li id="javascript">JavaScript</li>');


/**** REMPLACER OU SUPPRIMER UN NOEUD ****/

/*** Remplacer un noeud existant***/
var bashElt = document.createElement("li"); // Création d'un nouvel élément li
bashElt.id = "bash"; // Définition de son ID
bashElt.appendChild(document.createTextNode("Bash")); // Définition de son contenu textuel
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

/*** Supprimer un noeud ***/
// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));
