// alert("Hi");

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " est pair");
//     } else{
//         console.log(i + " est impair");
//     }
// }

// Modifiez le programme pour que le nombre initial soit saisi par l'utilisteur et afficher les 9 nombre suivants

var nombre = Number(prompt("Saisissez un nombre initial"));
var i = nombre;

while(i < nombre + 10){
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else{
        console.log(i + " est impair");
    }
    i++
}
