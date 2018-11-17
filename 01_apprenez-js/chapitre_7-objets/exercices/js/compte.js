// alert('Hi');

var compte = {
    titulaire : "Alex",
    solde : 0,
    crediter : function(montant){
        return this.solde += montant;
    },
    debiter : function(montant){
        return this.solde -= montant;
    },
    decrire : function(){
        return  " Tituaire : " + this.titulaire + ", solde : " + this.solde + " euros";
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Saisir le montant à crediter"));
compte.crediter(credit);
var debit = Number(prompt("Saisir le montant à débiter"));
compte.debiter(debit);
console.log(compte.decrire());
