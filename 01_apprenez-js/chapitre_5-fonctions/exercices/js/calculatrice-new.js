// TODO : écrire la fonction calculer()
function calculer(nbGauche, operateur, nbDroite){
    var resultat;
    switch (operateur) {
        case "+":
            resultat = nbGauche + nbDroite;
            break;
        case "-":
            resultat = nbGauche - nbDroite;
            break;
        case "*":
            resultat = nbGauche * nbDroite;
            break;
        case "/":
            resultat = nbGauche / nbDroite;
            break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
