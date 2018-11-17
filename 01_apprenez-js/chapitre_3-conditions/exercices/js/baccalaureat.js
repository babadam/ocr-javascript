// alert('Hi');

var saisi = Number(prompt("Saissisez la note obtenue : "));

if( saisi < 8){
    alert("Vous n'êtes pas reçu.");
} else if (saisi >= 8 && saisi < 10) {
    alert("Vous allez au rattrapage.");
} else if (saisi >=10 && saisi < 12) {
    alert("Vous avez obtenue votre diplôme. Félicitations.");
} else if (saisi >=12 && saisi < 14) {
    alert("Vous avez obtenue votre diplôme avec la mention Assez Bien. Félicitations.");
} else if (saisi >=14 && saisi < 16) {
    alert("Vous avez obtenue votre diplôme avec la mention Bien. Félicitations.");
} else if (saisi >=16 && saisi <= 20) {
    alert("Vous avez obtenue votre diplôme avec la mention Très Bien. Félicitations.");
} else{
    alert("Veuillez saisir une note valide !");
}
