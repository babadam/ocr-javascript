// alert('Hi');

function direBonjour(prenom, nom){
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}
var prenom = prompt("Saisissez votre prénom :");
var nom = prompt("Saisissez votre nom :");

console.log(direBonjour(prenom, nom));
