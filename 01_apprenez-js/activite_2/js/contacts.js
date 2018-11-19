/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

/***************************************************************************/
// 1-- Création du tableau contenant les options de l'utilisateur
// Création du prototype des options
var Option = {
    init : function (nom, numero){
        this.nom = nom;
        this.numero = numero;
    },
    decrire : function() {
        var description = this.numero + " : " + this.nom;
        return description;
    }
};
// Création des objects : option
var quitter = Object.create(Option);
quitter.init("Quitter", 0);
var lister = Object.create(Option);
lister.init("Lister les utilisateurs", 1);
var ajouter = Object.create(Option);
ajouter.init("Ajouter un utlisateur", 2);

// Création du tableaux options contenant les options
var options = [quitter, lister, ajouter];

// 2-- Création du tableau contenant les contacts
// Création du prototype des contacts
var Contact = {
    init : function (nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire : function(){
        var description = "Nom : " + this.nom + ", prenom : " + this.prenom;
        return description;
    }
}

// Création des contacts existant
var contact1 = Object.create(Contact);
contact1.init("Levisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

// Création du tableu contacts contenant les contacts
var contacts = [contact1, contact2];

// Fonction pour créer les contacts des utilisateurs
function ajouterContact(nom, prenom){
    var nouveauContact = Object.create(Contact);
    nouveauContact.init(nom, prenom);
    contacts.push(nouveauContact);
}

// 3-- Création d'une fonction pour afficher les choix utilisateur
function afficherChoix(){
    console.log("\n");
    console.log(lister.decrire());
    console.log(ajouter.decrire());
    console.log(quitter.decrire());
}
/*******************************************************************/

console.log("Bienvenue dans le gestionnaire de contacts");
afficherChoix();

while( option !== 0){
    var option = Number(prompt("Choisissez une option"));
    if( option == 1){
        console.log('Voici la liste de tous les contacts');
        contacts.forEach(function (contact){
            console.log(contact.decrire());
        });
        afficherChoix();
    } else if ( option == 2){
        var nom = prompt("Saississez votre nom :");
        var prenom = prompt("Saisissez votre prenom");
        ajouterContact(nom, prenom);
        console.log("Le nouveau contact a bien été ajouté");
    } else{
        console.log("Veuillez saisir un chiffre compris entre 0 et 2");
    }
}
if( option == 0){
    console.log("Au revoir !");
}
