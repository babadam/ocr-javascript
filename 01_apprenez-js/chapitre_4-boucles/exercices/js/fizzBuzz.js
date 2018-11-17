// alert('HI');

// Ecrire un programme qui affiche tout les nombres de 0 à 100
// Tous les nombres divible par 3 afficher Fizz
// Tous les nombres divible par 5 afficher Buzz

for(i=1; i<=100; i++){
    if((i % 5 == 0) && ( i % 3 == 0)){
        console.log('FizzBuzz');
    } else if( i % 5 == 0){
        console.log('Buzz');
    } else if( i % 3 == 0){
        console.log('Fizz');
    } else{
        console.log(i);
    }
}
