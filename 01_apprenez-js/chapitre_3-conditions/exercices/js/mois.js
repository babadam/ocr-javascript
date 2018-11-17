// alert('Hi');

var saisi = prompt("Saisissez un mois");

if( saisi == 'janvier' || saisi == 'mars' || saisi == 'mai' || saisi == 'juillet' || saisi == 'aout' || saisi == 'octobre' || saisi == 'décembre'){
    alert("Le mois de " + saisi + " comporte 31 jours");
} else if ( saisi == "avril" || saisi == "juin" || saisi == "septembre" || saisi == "novembre") {
    alert("Le mois de " + saisi + " comporte 30 jours");
} else if ( saisi == "février") {
    alert("Le mois de " + saisi + " comporte 28 jours");
} else{
    alert("Ceci n'est pas un mois valide !");
}
