// alert('Hi');

// 1-- Modification du contenu HTML

// ajout d'un langage dans la liste
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suprression du contenu HTML de la liste
// document.getElementById("langages").innerHTML = "";

// modif du contenu textuel du premier tritre
document.querySelector("h1").textContent += " de programmation";

// définition de l'attribut "id" au premier titre
document.querySelector("h1").setAttribute("id", "titre");

// href, id et value directement modifable par une propriété == ligne au dessus
document.querySelector("h1").id = "titre";

// Ajout ou supp de classe à un élément du dom
var titreElt = document.querySelector("h1"); // Accès au oremier titre h1
titreElt.classList.remove("debut"); // suppr de la classe 'debut'
titreElt.classList.add("titre"); //ajout de la classe 'titre'
console.log(titreElt);

// 2-- Ajouter un nouvel élément

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // définition de son identifiant
pythonElt.textContent = "Python"; // définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

// 3-- Variante pour ajouter un élément

// Création d'un noeud textuel
var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

// Ajout d'un noeud avant un autre noeud
var pearlElt = document.createElement("li"); // Création d'un élément 'li'
pearlElt.id = "pearl"; // Définition de son ID
pearlElt.textContent = "Pearl"; // Définition de son contenu textuel
// Ajout du nouvel élement avant l'id identifié par 'php'
document.getElementById("langages").insertBefore(pearlElt, document.getElementById("php"));

// Postion exacte du nouveau noeyd

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", '<li id="javascript">Javascript</li>');

// 4-- Remplacer ou supprimer u nélément
// Remplacer un éléent existant
var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son ID
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par 'pearl' par le nouvel nélément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("pearl"));

// Supression d'un élément
document.getElementById("langages").removeChild(document.getElementById("bash"));

// EXERCICE
// Ajout d'un élément p en dessous de la liste

// Ce qu ej'ai fait
// var paraWikiElt = document.createElement("p");
// var lienWikiElt = document.createElement("a");
// paraWikiElt.textContent = "En voici une liste plus complète.";
// lienWikiElt.href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
// lienWikiElt.textContent = "liste";
//
// document.getElementById("contenu").appendChild(paraWikiElt);
// document.getElementById("contenu").insertAdjacentHTML("afterBegin", lienWikiElt);

// Correction
var paraWikiElt = document.createElement("p");
var lienWikiElt = document.createElement("a");
lienWikiElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienWikiElt.textContent = "liste";
paraWikiElt.appendChild(document.createTextNode("En voici une "));
paraWikiElt.appendChild(lienWikiElt);
paraWikiElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(paraWikiElt);
