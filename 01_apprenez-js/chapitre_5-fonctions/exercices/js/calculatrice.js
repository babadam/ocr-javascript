// alert('Hi');

// function calculer(gauche, operateur, droite){
//     var resultat;
//     if( operateur = "+"){
//         resultat = gauche + droite;
//     } else if ( operateur = "-"){
//         resultat = gauche - droite;
//     } else if (operateur = "*"){
//         resultat = gauche * droite;
//     } else{
//         resultat = gauche / droite;
//     }
//     return resultat;
// }

// Correction 
function calculer(operandeGauche, operation, operandeDroite) {
    var resultat;
    switch (operation) {
    case "+":
        resultat = operandeGauche + operandeDroite;
        break;
    case "-":
        resultat = operandeGauche - operandeDroite;
        break;
    case "*":
        resultat = operandeGauche * operandeDroite;
        break;
    case "/":
        resultat = operandeGauche / operandeDroite;
        break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
