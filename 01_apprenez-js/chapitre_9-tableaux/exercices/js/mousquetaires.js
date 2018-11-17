// alert('Hi');

// Création du tableau mousquetaires
var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires : ");
// affiche les éléments du tableau avec for
for (var i = 0; i < mousquetaires.length; i++){
    console.log(mousquetaires[i]);
}

// ajoute un élément au tableau
mousquetaires.push("D'Artagan");
console.log("A présent, il sont quatre !");

// affiche les élements du tableau avec forEach
mousquetaires.forEach( function(mousquetaire) {
    console.log(mousquetaire);
});
