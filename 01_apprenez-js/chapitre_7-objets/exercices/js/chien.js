// alert('Hi');

// TODO : ajoutez ici la définition de l'objet chien
var chien = {
    nom : "Crokdur",
    race : "mâtin de Naples",
    taille : 75,
    aboyer : function(){
        return "Grr ! Grr !";
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
