/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

// Création des éléments 1
var liste = document.createElement("ul");
// Modif du <ul> : pour qu'il soit aligné avec le "Activité 1"
liste.style.padding = "0";

for ( var i=0; i<listeLiens.length; i++){
    // Création des élements 2
    var listeElts = document.createElement("li");
    var lienElts = document.createElement("a");
    var urlElts = document.createElement("span");
    var pElts = document.createElement("p");

    // Modification du contenu des éléments

    // Modif. des <li>
    listeElts.classList.add("lien");
    listeElts.style.listStyle = "none";

    // Modif. des <a>
    lienElts.href = listeLiens[i].url;
    lienElts.textContent = listeLiens[i].titre;
    lienElts.style.color = "#428bca";
    lienElts.style.fontWeight = "bold";
    lienElts.style.marginRight = "0.5%";
    lienElts.style.textDecoration = "none";

    // Modif. du <span>
    urlElts.textContent = listeLiens[i].url;

    // Modif. du <p>
    pElts.textContent = "Ajouté par " + listeLiens[i].auteur;
    pElts.style.fontSize = "80%";
    pElts.style.margin = "3px 0px";

    // Insertion des éléments dans le DOM

    // Insertion du <a><span><p> dans le <li>
    listeElts.appendChild(lienElts);
    listeElts.appendChild(urlElts);
    listeElts.appendChild(pElts);

    // Insertion du <li> dans le <ul>
    liste.appendChild(listeElts);

    // Insertion du <ul> dans <div id="contenu">
    document.getElementById("contenu").appendChild(liste);
}

// Appartition du formulaire au clic
bouton = document.getElementById("button");
bouton.addEventListener("click", function (e) {
    document.getElementById("formulaire").style.display = "block";
    bouton.style.display = "none";
})

// Validation formulaire
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var nom = form.elements.nom.value;
    var titre = form.elements.titre.value;
    var url = form.elements.url.value;
    var regexUrl = /http/;
    var message = "";

    if ( (nom !== "") && (titre !== "") && (url !== "") ){
        var liNouveau = document.createElement("li");
        var aNouveau = document.createElement("a");
        var spanNouveau = document.createElement("span");
        var pNouveau = document.createElement("p");
        liNouveau.classList.add("lien");
        liNouveau.style.listStyle = "none";
        aNouveau.href = url;
        aNouveau.textContent = titre;
        aNouveau.style.color = "#428bca";
        aNouveau.style.fontWeight = "bold";
        aNouveau.style.marginRight = "0.5%";
        aNouveau.style.textDecoration = "none";
        pNouveau.textContent = "Ajouté par " + nom;
        pNouveau.style.fontSize = "80%";
        pNouveau.style.margin = "3px 0px";

        message = "Le lien " + titre + " a bien été ajouté.";
        form.style.display = "none";
        bouton.style.display = "block";
            if ( regexUrl.test(url) ){
                spanNouveau.textContent = url;
            } else {
            spanNouveau.textContent ="http://" + url;
            }
        // Insertion du <a><span><p> dans le <li>
        liNouveau.appendChild(aNouveau);
        liNouveau.appendChild(spanNouveau);
        liNouveau.appendChild(pNouveau);

        // Insertion du <li> dans le <ul>
        liste.appendChild(liNouveau);

        // Insertion du <ul> dans <div id="contenu">
        document.getElementById("contenu").appendChild(liste);

        // affiche le message deux secondes
        var msg = document.getElementById("msg");
        msg.textContent = message;
        msg.style.padding = "1.5em";
        msg.style.marginTop = "1em";
        msg.style.backgroundColor = "#A0E1F5";
        msg.style.borderRadius = "5px";
        msg.style.color = "#428bca";
        setTimeout(function () {
            msg.textContent = "";
            msg.style = "";

        }, 2000);
    }
    e.preventDefault();
});
