// alert('Hi');

// Ce que j'ai fait (fonctionne)

function compteClic() {
    compte++;
    document.getElementById("compteurClics").textContent = compte;
}
function desactiveCompteur (){
    btnClic.removeEventListener("click", compteClic);
}
var compte = 0;
var btnClic = document.getElementById("clic");
btnClic.addEventListener("click", compteClic);

var btnDesactive = document.getElementById("desactiver");
btnDesactive.addEventListener("click", desactiveCompteur);
// ******************************************************//

// Correction

function clic() {
    compteurClics++;
    document.getElementById("compteurClics").textContent = compteurClics;
}

var compteurClics = 0;

document.getElementById("clic").addEventListener("click", clic);

document.getElementById("desactiver").addEventListener("click", function () {
    document.getElementById("clic").removeEventListener("click", clic);
})
