// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

var dico = document.createElement("dl");



for(i=0; i<mots.length; i++){
    var termeElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mots[i].terme;
    var defElt = document.createElement("dd");
    defElt.textContent = mots[i].definition;

    termeElt.appendChild(strongElt);
    dico.appendChild(termeElt);
    dico.appendChild(defElt);
}
document.getElementById("contenu").appendChild(dico);
