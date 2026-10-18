// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F1 — Ma carte d'apprenant (Niveau 1 — Facile)

Objectif : choisir le bon mot-clé (const ou let) et reconnaître les 5 types primitifs.
Contexte : Kadea prépare les badges de la promo et a besoin de ta fiche.

Consignes :
1. Déclare prenom, age, commune, estInscrit, surnom (sans valeur) et ancienneFormation (valeur null).
2. Choisis const ou let pour chacune et justifie ton choix en commentaire.
3. Affiche ta fiche avec un seul gabarit littéral (une seule chaîne construite par interpolation).
4. Affiche le typeof de chaque variable.

Résultat attendu :
Je m'appelle Grâce, j'ai 22 ans et j'habite à Lemba.
puis : string, number, string, boolean, undefined, object

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

 // 1. Déclaration des variables et justification

const prenom = "Grâce"; // const : la valeur ne sera pas réassignée.
const age = 22; // const : l'âge ne sera pas réassigné dans cet exercice.
const commune = "Lemba"; // const : la commune ne sera pas réassignée.
const estInscrit = true; // const : le statut ne sera pas réassigné.
let surnom; // let : la variable pourra recevoir une valeur plus tard.
const ancienneFormation = null; // const : la valeur null ne sera pas réassignée.

// 2. Afficher la fiche avec un seul gabarit littéral

console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);

// 3. Afficher le type de chaque variable

console.log(typeof prenom); // string
console.log(typeof age); // number
console.log(typeof commune); // string
console.log(typeof estInscrit); // boolean
console.log(typeof surnom); // undefined
console.log(typeof ancienneFormation); // object
