// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M5 — La vitre teintée (portée de bloc) (Niveau 2 — Moyen)

Objectif : prédire où une variable existe et corriger une ReferenceError.

Consignes :
1. Le code ci-dessous est déjà recopié dans la zone de travail : écris tes prédictions en commentaire avant de l'exécuter.
2. Exécute-le : pourquoi la fonction afficher ne s'exécute-t-elle jamais ?
3. Corrige le code pour que tout s'affiche sans erreur, sans déplacer les déclarations dans les blocs.

Code fourni :
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
console.log(secret);

Résultat attendu :
avant correction : Kinshasa puis ReferenceError: commune is not defined.
après correction : tout s'affiche (Kinshasa, Gombe, pondu…) sans aucune erreur.

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Mes prédictions (avant d'exécuter) :
// Kinshasa puis erreur commune n'est pas defini

//===========Raison de refus d'execution==========
// commune est déclarée dans le scope if avec const : elle est accessible uniquement dans ce scope. Il faut donc afficher commune à l'intérieur du scope.

//========= code corrigé=========
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
console.log(commune);
} // j'ai fais entre le console log dans le scope if
const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
//console.log(secret); secret est déclarée à l'intérieur de afficher : elle est accessible uniquement dans cette fonction. 
//donc si je décomente ça affiche erreur