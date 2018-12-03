// alert('Hi');

/*********** Ce que j'ai fait *****************/// (ne fonctionne pas)
// Essai 1
// function changeCouleur (e) {
//     if (String.fromCharCode(e.charCode).toLowerCase() === "r"){
//         paragraphe.style.backgroundColor = "red";
//     } else if (String.fromCharCode(e.charCode).toLowerCase() === "b"){
//         paragraphe.style.backgroundColor = "white";
//     } else if (String.fromCharCode(e.charCode).toLowerCase() === "v"){
//         paragraphe.style.backgroundColor = "green";
//     } else if (String.fromCharCode(e.charCode).toLowerCase() === "j" ) {
//         paragraphe.style.backgroundColor = "yellow";
//     }
// }
// var paragraphe = document.querySelectorAll("div");
// document.addEventListener("keypress", changeCouleur);

// Essai 1
// var paragraphe = document.getElementsByTagName("div");
// function essai(e){
//     var couleur = "transparant";
//     if (String.fromCharCode(e.charCode).toLowerCase() === "r"){
//         couleur = "red";
//     } else if (String.fromCharCode(e.charCode).toLowerCase() === "b"){
//         couleur = "white";
//     } else if (String.fromCharCode(e.charCode).toLowerCase() === "v"){
//         couleur = "green";
//     } else if (String.fromCharCode(e.charCode).toLowerCase() === "j" ) {
//         couleur = "yellow";
//     }
//     return couleur;
// }
// for ( i=0; i<paragraphe.length; i++){
//     paragraphe[i].style.backgroundColor = essai(couleur);
// }
// document.addEventListener("keypress", changeCouleur);

/************************ [CORRECTION] **************************/
document.addEventListener("keypress", function (e) {
    var touche = String.fromCharCode(e.charCode); // Récupération de la touche présséelse
    touche = touche.toUpperCase(); // Pour gérer indifféremment minuscule et majuscule
    var couleur = "";
    switch (touche) {
        case "B":
            couleur = "white";
            break;
        case "J":
            couleur = "yellow";
            break;
        case "V":
            couleur = "green";
            break;
        case "R":
            couleur = "red";
            break;
        default:
            console.log("Touche " + touche + " non gérée.");
    }
    // Changement de couleur de fond pour toutes les divs
    var divs = document.getElementsByTagName("div");
    for (var i=0; i<divs.length; i++){
        divs[i].style.backgroundColor = couleur;
    }
});
