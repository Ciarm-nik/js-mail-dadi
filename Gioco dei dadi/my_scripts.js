// Il giocatore lancia un dado
var primoLancio = Math.floor(Math.random() * 6); 
console.log ("Il punteggio del giocatore è " + primoLancio);

// Il computer lancia un dado
var secondoLancio = Math.floor(Math.random() * 6); 
console.log ("Il punteggio del giocatore è " + secondoLancio);


if (primoLancio > secondoLancio) {
    console.log("Giocatore vince!!");
}