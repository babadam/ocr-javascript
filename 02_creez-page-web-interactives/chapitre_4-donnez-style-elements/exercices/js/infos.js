// alert('Hi');

// Ce que j'ai fait
var infosElts = getComputedStyle(document.getElementById("contenu"));

var infos = [infosElts.height, infosElts.width];

var pElts = document.createElement("p");
pElts.textContent = " Informations sur l'élement : ";
document.getElementById("infos").appendChild(pElts);

var listeInfos = document.createElement("ul");
for( i=0; i<infos.length; i++){
    var ligne = document.createElement("li");
    ligne.textContent = infos[i];
    listeInfos.appendChild(ligne);
    document.getElementById("infos").appendChild(listeInfos);
}

// Correction
var styleElement = getComputedStyle(document.getElementById("contenu"));
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);
