// alert('Hi');

var nombre1 = 5;
var nombre2 = 3;

// Je veux que nombre1 soit égal à 3 et que nombre2 soit égal à 5
var permutation = nombre2; // nb3 = 3
nombre2 = nombre1; // nb2 = 5
nombre1 = permutation;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5
