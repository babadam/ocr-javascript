// alert('Hi');

nb1 = Number(prompt("Saisissez un nombre :"));
nb2 = Number(prompt("Saisissez un deuxième nombre :"));


if( nb1 < nb2 ){
    alert( nb1 + ' est plus petit que ' + nb2 );
} else if ( nb1 > nb2 ) {
    alert( nb1 + ' est plus grand que ' + nb2 );
} else if ( nb1 == nb2 ) {
    alert( nb1 + ' et ' + nb2 + ' sont égaux' );
} else {
    alert(  'Veuillez saisir des nombres !');
}
