var inserisciMail = prompt ("Inserisci la tua mail");

//Creo una lista (array) delle mail
var listaEmail = ["ciao@libero.it", "verde@libero.it", "rosso@libero.it", "blu@libero.it", "nero@libero.it", "bianco@libero.it", "nero1@libero.it", "verde2@libero.it", "rosso1@libero.it"];
// console.log (listaEmail)

var emailVerificata = false;

//Inizio ciclo per verificare l'email corretta
for (var i = 0; i < listaEmail.length; i++) {
    if (listaEmail[i] == inserisciMail) {
        var emailVerificata = true;
    } 
}
//email corretta
if (emailVerificata == true) {
    console.log("La tua mail è presente nella lista...benvenuto nel sito")
//email errata    
} else {
    alert("La tua email non è corretta...riprova")
}


