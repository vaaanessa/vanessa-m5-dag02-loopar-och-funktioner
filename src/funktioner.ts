// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
  if (Number.isInteger(pris)) {
    return `${pris} kr`;
  } else {
    return `${pris.toFixed(2).replace(".", ",")} kr`;
  }
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
  const moms: number = (pris * 0.12) / 1.12;
  return Number(moms.toFixed(2));
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
  const rabatt: number = (pris * procent) / 100;
  return pris - rabatt;
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  if (veckodag === "lördag" || veckodag === "söndag") {
    return klockslag >= 9 && klockslag < 16;
  } else {
    return klockslag >= 7 && klockslag < 18;
  }
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.

export function summa(tal: number[]): number {
  let total: number = 0;

  for (const nummer of tal) {
    total = total + nummer;
  }
  return total;
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
  if (tal.length === 0) {
    return 0;
  }

  let summa: number = 0;

  for (const nummer of tal) {
    summa = summa + nummer;
  }

  return summa / tal.length;
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
  let störst = tal[0];

  for (const nummer of tal) {
    if (nummer > störst) {
      störst = nummer;
    }
  }

  return störst;
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
  let resultat: string = "";

  for (let i: number = 0; i < antal; i++) {
    resultat = resultat + text;
  }
  return resultat;
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  const summa: number = antal * pris;
  const prisText: string = formateraPris(summa);

  return `${antal} x ${namn}: ${prisText}`;
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => {
  const resultat: number = n * 2;
  return resultat;
};
export const ärJämnt = (n: number): boolean => {
  const total: boolean = n % 2 === 0;
  return total;
};

/// Med function skriver jag ordet function före namnet.
// En pilfunktion skriver jag här med const och =>.
// Båda varianterna kan ta emot ett tal och ge tillbaka ett svar.
