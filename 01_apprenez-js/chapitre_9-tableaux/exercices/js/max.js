// alert('Hi');

var valeurs = [9, 3, 7, 2, 11, 10];

var max = valeurs[0];

for(i=1; i<valeurs.length; i++){
    if(valeurs[i] > max){
        max = valeurs[i];
    }
}

console.log("Le maximum des éléments vaut " + max);
