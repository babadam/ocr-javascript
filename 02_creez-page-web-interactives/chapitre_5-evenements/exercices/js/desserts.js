// alert('Hi');

/******************* Ce que j'ai fait ( ajout dans la liste fonctionne mais pas la modif) **************/
// var desserts = [];
// function ajoutDessert () {
//     var dessertSaisi = prompt("Entrez le nom du nouveau dessert :");
//     desserts.push(dessertSaisi);
//     for ( i=0; i<desserts.length; i++){
//         var liste = document.createElement("li");
//         liste.textContent = desserts[i];
//     }
//     document.getElementById("desserts").appendChild(liste);
// }
//
// // function modifDessert (){
// //     var modifSaisi = prompt("Modifier le dessert : ");
// // }
// var btn = document.querySelector("button");
// btn.addEventListener("click", ajoutDessert);
//
// // var ul = document.getElementById("desserts").addEventListener("click", modifDessert);


/************ [CORRECTION] *******************/

document.querySelector("button").addEventListener("click", function(){
    var nomDessert = prompt("Entrez le nom du nouveau dessert :");
    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    /** Debut modif **/
    dessertElt.addEventListener("click", function (e) {
        var nouveauNom = prompt("Modifiez le nom du dessert : ", e.target.textContent);
        e.target.textContent = nouveauNom;
    });
    /** Fin modif **/
    document.getElementById("desserts").appendChild(dessertElt);
});
