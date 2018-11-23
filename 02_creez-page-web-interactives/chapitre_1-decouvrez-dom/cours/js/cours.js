// alert('Hi');

var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);
var b = document.body; // La variable h contient l'objet body du DOM
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE){
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

// Accès au premier enfant du noeud Body
console.log(document.body.childNodes[0]);
// Accès au deuxème enfant du noeud Body
console.log(document.body.childNodes[1]);

// Affiche les noeufs enfant du noeud body
for ( var i=0; i<document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
}
