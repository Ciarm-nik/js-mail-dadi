// Il giocatore lancia un dado
var primoLancio = Math.floor(Math.random() * 6)  +1; 
console.log ("Il punteggio del giocatore è " + primoLancio);

// Il computer lancia un dado
var secondoLancio = Math.floor(Math.random() * 6) +1; 
console.log ("Il punteggio del giocatore è " + secondoLancio);

// In questo caso vince il giocatore
if (primoLancio > secondoLancio) {
    console.log("Giocatore vince!!");
}
// In questo caso vince il computer
else if (primoLancio < secondoLancio) {
    console.log("Computer vince!!");
}
// Nessun vincitore 
else if (primoLancio == secondoLancio) {
    console.log("Nessun vincitore!!");
}
    


