// alert("Hi");

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


//-- La boucle while
// La boucle while permet de répéter des instructions tant qu'une condition est vérifiée
console.log("Début du programme");
var nombreWhile = 1;
while (nombreWhile <= 5) {
    console.log(nombreWhile);
    nombreWhile++;
}
console.log("Fin du programme");
// Avant chaque tout de boucle, la condition associé au while est évaluée.
// ° Si elle est vraie, les instructions du bloc de code associé au while sont éxécutés.
// Ensuite, l éxécution revient au niveau du while et la condition est à nouveau vérifiée.
//
// ° Si elle est fausse, les instructions du bloc ne sont pas éxécutées et le programe continue juste après le bloc while

//-- La boucle for
var compteur;
for(compteur = 1; compteur <= 5; compteur++){
    console.log(compteur);
}
// L'initialisation se produit une seule fois, au début de l'éexécution
// LA condition est évaluée avant chaque tour de boucle. Si elle est vraie, le tour de boucle est éffectué. Sinon, la boucle est terminée.
// l'étape est réalisée après chaque tour de boucle 
