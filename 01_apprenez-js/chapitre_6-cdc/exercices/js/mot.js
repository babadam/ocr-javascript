// alert("Hi");

//  faire saisir un mot à l'utilisateur puis afficher quelques informations sur le mot saisi
var mot = prompt("Saisissez un mot :");
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s).");
console.log("Il s'écrit en minucules " + mot.toLowerCase());
console.log("Il s'écrit en majuscules " + mot.toUpperCase());

// Compter le nombre de voyelles et de consonnes
 function compterNbVoyelle(){
     var voyelle = 0;
     var consonne = 0;
      for( i=0; i<mot.length; i++){
          if( (mot[i] === "a") || (mot[i] === "e") || (mot[i] === "i") || (mot[i] === "o") || (mot[i] === "u") || (mot[i] === "y") ){
              voyelle++;
          } else{
              consonne++;
          }
      }
      console.log("Il y a " + voyelle + " voyelle(s) et " + consonne + " consonne(s).")
}

// Afficher le mot dans un sens inverser rue -> eur
function inverser(){
    var motInverse = "";
    for( i=0; i<mot.length; i++){
        motInverse = mot[i] + motInverse;
    }
    console.log("Il s'écrit à l'envers " + motInverse);
    if(motInverse.toLowerCase() === mot.toLowerCase()){
        console.log( mot + " est un palindrome.")
    }else{
        console.log( mot + " n'est pas un palindrome")
    }
}

// Convertir en Leet speak
function convertirEnLeetSpeek(mot){
    var motLeet ="";
    for (var i=0; i<mot.length; i++){
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}
function trouverLettreLeet(lettre){
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
            case "a":
                lettreLeet = "4";
                break;
            case "b":
                lettreLeet = "8";
                break;
            case "e":
                lettreLeet = "3";
                break;
            case "l":
                lettreLeet = "1";
                break;
            case "o":
                lettreLeet = "0";
                break;
            case "s":
                lettreLeet = "5";
                break;
            default:
        }
        return lettreLeet;
    }


compterNbVoyelle(mot);
inverser(mot);

var motLeetSpeak = convertirEnLeetSpeek(mot);
console.log("Il s'écrit en leet speak " + motLeetSpeak);
