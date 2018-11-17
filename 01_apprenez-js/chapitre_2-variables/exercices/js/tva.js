// alert("Hi");

var saisi = Number(prompt("Entrez un prix en € pour connaître son montant TTC"));
var taux = 19.6/100 + 1;
var conversion = saisi * taux;

alert("Son prix TTC est de " + conversion + "€");
