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

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément
