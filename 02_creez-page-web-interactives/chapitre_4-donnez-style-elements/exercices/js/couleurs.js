// alert('Hi');

var couleurTexte = prompt("Veuillez saisir la couleur du texte en anglais");
var couleurFond = prompt("Veuillez saisir la couleur du fonc en anglais");

var divElts = document.getElementsByTagName("div");

for( i=0; i<divElts.length; i++){
    divElts[i].style.backgroundColor = couleurFond;
    divElts[i].style.color = couleurTexte;
}
