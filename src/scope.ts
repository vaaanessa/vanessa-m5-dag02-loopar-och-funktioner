const kafe = "Kardemumma";

function visaNamn() {
  const recept = "hemligt";
  console.log(kafe); // gissning: Kardemumma
  console.log(recept); // gissning: hemligt
}
visaNamn();

let räknare = 0;
function ökaRäknare() {
  räknare = räknare + 1;
}
ökaRäknare();
ökaRäknare();
console.log(räknare); // gissning: 2

function lokal() {
  let räknare = 100;
  räknare++;
  return räknare;
}
console.log(lokal()); // gissning: 101
console.log(räknare); // gissning: 1 Resultat: 2

// Ta bort kommentaren på nästa rad och läs felet:
//console.log(recept); // gissning: Jag tror att det blir ett fel eftersom recept skapas inne i funktionen och inte kan användas utanför den.

for (let i = 0; i < 3; i++) {
  console.log("varv", i);
}
// Ta bort kommentaren på nästa rad och läs felet:
//console.log(i); // gissning: Jag tror att det blir ett fel eftersom "i" skapades i loopen och inte kan användas utanför den.

/* Skriv din regel

Fyll i med egna ord:

- En variabel som skapas inuti en funktion kan inte användas utanför funktionen.
- En funktion kan se variabler som ligger utanför och innanför den.
- `let i` i en for-loop kan bara användas i själva loopen.
*/
