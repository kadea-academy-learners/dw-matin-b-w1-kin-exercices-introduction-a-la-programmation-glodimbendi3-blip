// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

const nombreMystere = Math.floor(Math.random() * 100) + 1;
const maxEssais = 7;

let essais = 0;
let trouve = false;

while (essais < maxEssais && trouve === false) {
  const saisie = prompt(
    `Devine le nombre entre 1 et 100.\nEssais restants : ${maxEssais - essais}`
  );

  // Gérer l'annulation de prompt()
  if (saisie === null) {
    console.log("Partie annulée.");
    break;
  }

  // Refuser une saisie vide ou composée d'espaces
  if (saisie.trim() === "") {
    console.log("Saisie invalide : entre un nombre.");
    continue;
  }

  const proposition = Number(saisie);

  // Refuser les saisies qui ne sont pas des nombres valides
  if (
    Number.isNaN(proposition) ||
    !Number.isInteger(proposition) ||
    proposition < 1 ||
    proposition > 100
  ) {
    console.log("Saisie invalide : entre un entier de 1 à 100.");
    continue;
  }

  // Un essai est compté uniquement si la saisie est valide
  essais++;

  if (proposition === nombreMystere) {
    trouve = true;
    console.log(`Bravo ! Trouvé en ${essais} essais !`);
  } else if (proposition < nombreMystere) {
    console.log("Plus grand !");
  } else {
    console.log("Plus petit !");
  }
}

if (trouve === false && essais === maxEssais) {
  console.log(`Perdu ! Le nombre mystère était ${nombreMystere}.`);
}