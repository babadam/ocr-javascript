// alert('Hi');

var jour = prompt('Quel jour sommes-nous aujourd\'hui ?');
var reponse = 'Demain nous serons ';

if( jour == 'lundi' || jour == 'Lundi' ){
    alert( reponse + 'mardi.');
} else if ( jour == 'mardi' || jour == 'Mardi' ) {
    alert( reponse + 'mercredi.');
} else if ( jour == 'mercredi' || jour == 'Mercredi' ) {
    alert( reponse + 'jeudi.');
} else if ( jour == 'jeudi' || jour == 'Jeudi' ) {
    alert( reponse + 'vendredi.');
} else if ( jour == 'vendredi' || jour == 'Vendredi' ) {
    alert( reponse + 'samedi.');
} else if ( jour == 'samedi' || jour == 'Samedi' ) {
    alert( reponse + 'dimanche.');
} else if ( jour == 'dimanche' || jour == 'Dimanche' ) {
    alert( reponse + 'lundi.');
} else {
    alert( jour + ' n\'est pas un jour !');
}
