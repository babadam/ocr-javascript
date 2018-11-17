// alert('Hi');

var heures = Number(prompt("Saisissez les heures"));
var minutes = Number(prompt("Saisissez les minutes"));
var secondes = Number(prompt("Saisissez les secondes"));

// secondes++;

if( heures >= 0 && heures <= 23 && minutes >= 0 && minutes <= 59 && secondes >= 0 && minutes <= 59){
    secondes++;
    if( secondes == 60){
        secondes = 0;
        minutes++;
        if( minutes == 60){
            minutes = 0;
            heures++;
            if( heures == 24){
                heures = 0
            }
        }
    }
    alert('Dans une seconde, il sera ' + heures + 'h ' + minutes + 'min et ' + secondes + 's.');
}

else{
    alert('Veuillez entrez une heure comprise entre 0h et 23h');
}
