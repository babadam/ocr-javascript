// alert('Hi');

function direBonjour(prenom, nom){
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenomVar = prompt("Saisissez votre prénom :");
var nomVar = prompt("Saisissez votre nom :");

console.log(direBonjour(prenomVar, nomVar));
