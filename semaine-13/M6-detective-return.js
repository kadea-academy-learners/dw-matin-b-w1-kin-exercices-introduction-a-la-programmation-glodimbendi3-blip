// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

//=============Detection d'erreurs et comentaires===========
//const doubler = (n) => { n * 2; }; // cette fonction ne fais pas retour de données au programme il manque un ==return==
//console.log(doubler(4));           // undefined ?!

//const calculerTva = (prix) => { console.log(prix * 0.16); };//ici on affiche prix*0.16 avec console.log au lieu de retourne avec return
//const total = calculerTva(1000) + 500;
//console.log(total);                // NaN ?!

//const saluer = (prenom) => {
  //return
//    `Mbote \${prenom}`; //--------- return etait à la ligne avant. après return on n'écris plus du code dans ce scope
//};
//console.log(saluer('Ney'));        // undefined ?!

//=============================Code corrigé==========================================================

const doubler = (n) => { return n * 2; }; 
console.log(doubler(4));           

const calculerTva = (prix) => { return (prix * 0.16); }; 
const total = calculerTva(1000) + 500;
console.log(total);                

const saluer = (prenom) => {
  return `Mbote ${prenom}`;};   
console.log(saluer('Ney'));       