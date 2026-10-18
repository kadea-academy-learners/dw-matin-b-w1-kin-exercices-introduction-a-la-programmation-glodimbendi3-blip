RECHERCHES — Semaine 13
Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
Ne modifie pas les titres ## F1 — … : ils servent à l'évaluation automatique.
F1 — Ma carte d'apprenant

Question : Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

JavaScript renvoie "object" avec typeof null à cause d'un ancien choix de conception du langage. À l'origine, null était représenté d'une manière qui correspondait au marqueur de type des objets. Ce comportement a été conservé pour éviter de casser les anciens programmes. Pourtant, null représente une absence de valeur et ce n'est pas un objet.

Mon test dans la console :

let ville = null;
console.log(typeof ville); // "object"
console.log(ville === null); // true


Source : MDN — typeof

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Explique pourquoi typeof null renvoie object ». J'ai vérifié la réponse sur MDN, dans la section typeof null.

F2 — Le convertisseur de saisie

Question : Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

NaN veut dire « Not a Number ». JavaScript utilise cette valeur lorsqu'une opération numérique ne produit pas un nombre valide. NaN === NaN renvoie false, car NaN est une valeur particulière qui n'est égale à aucune valeur, même à elle-même. Pour la détecter correctement, on peut utiliser Number.isNaN().

Mon test dans la console :

let resultat = Number("bonjour");
console.log(resultat); // NaN
console.log(NaN === NaN); // false
console.log(Number.isNaN(resultat)); // true


Source : MDN — Number.isNaN()

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Explique NaN, pourquoi NaN === NaN renvoie false et comment le détecter ». J'ai vérifié le fonctionnement de Number.isNaN() sur MDN.

F3 — Pair ou impair : le tirage des tickets

Question : Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

Ma réponse (avec mes mots, 3 à 5 lignes) :

L'expression -7 % 2 renvoie -1, car le reste garde le signe du nombre de départ. Un nombre impair positif peut donner un reste de 1, mais un nombre impair négatif peut donner -1. Tester % 2 === 1 ne détecte donc pas tous les nombres impairs. Il vaut mieux utiliser % 2 !== 0.

Mon test dans la console :

console.log(-7 % 2); // -1
console.log(7 % 2); // 1
console.log(-7 % 2 !== 0); // true
console.log(-7 % 2 === 1); // false


Source : MDN — Opérateur reste (%)

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Explique le résultat de -7 % 2 et comment détecter un nombre impair ». J'ai vérifié le comportement de l'opérateur % sur MDN.

F4 — Le contrôleur du bus

Question : Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

Oui, on peut enchaîner plusieurs opérateurs ternaires pour tester plusieurs conditions. Cependant, le code devient rapidement difficile à lire et à comprendre. Pour plusieurs cas, il est souvent préférable d'utiliser if...else ou switch. Cela rend les conditions plus claires et facilite les corrections.

Mon test dans la console :

const age = 17;
const resultat = age >= 18 ? "Adulte" : age >= 12 ? "Adolescent" : "Enfant";
console.log(resultat); // "Adolescent"

if (age >= 18) {
  console.log("Adulte");
} else if (age >= 12) {
  console.log("Adolescent");
} else {
  console.log("Enfant");
}
// Affiche "Adolescent"


Source : MDN — Opérateur conditionnel (ternaire)

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Peut-on enchaîner les opérateurs ternaires et pourquoi éviter de trop les utiliser ? ». J'ai vérifié la syntaxe sur MDN.

F5 — Ma première fonction fléchée

Question : Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

On peut enlever les parenthèses autour des paramètres lorsqu'une fonction fléchée possède exactement un seul paramètre. Avec zéro ou plusieurs paramètres, les parenthèses sont nécessaires. On peut aussi enlever les accolades et return lorsque la fonction retourne directement une seule expression. Si le corps contient plusieurs instructions, on garde les accolades et on écrit return si nécessaire.

Mon test dans la console :

const doubler = nombre => nombre * 2;
const additionner = (a, b) => a + b;
const afficher = () => "Bonjour";

console.log(doubler(4)); // 8
console.log(additionner(3, 5)); // 8
console.log(afficher()); // "Bonjour"

const carre = nombre => {
  return nombre * nombre;
};
console.log(carre(3)); // 9


Source : MDN — Fonctions fléchées

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Explique quand enlever les parenthèses, les accolades et return dans une fonction fléchée ». J'ai vérifié les règles sur MDN.

F6 — Le compte à rebours

Question : À quoi sert le mot-clé continue ? Quelle différence avec break ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

Le mot-clé continue permet de passer directement à l'itération suivante d'une boucle sans exécuter le reste du code de l'itération actuelle. Au contraire, break arrête complètement la boucle. continue est utile lorsqu'on veut ignorer certaines valeurs, tandis que break sert à sortir de la boucle dès qu'une condition est remplie.

Mon test dans la console :

for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 4) {
    break;
  }
  console.log(i);
}
// Affiche 1 puis 3


Source : MDN — continue et MDN — break

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Explique la différence entre continue et break dans une boucle JavaScript ». J'ai vérifié les deux instructions sur MDN.

M1 — FizzBuzz kinois

Question : Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

FizzBuzz est un exercice connu qui consiste à parcourir une série de nombres et à remplacer certains nombres par des mots selon des règles. Il est utilisé pour vérifier si une personne maîtrise les conditions, les boucles et l'opérateur modulo. Même s'il est simple, il permet de voir si le candidat sait transformer une consigne en programme fonctionnel. Il sert souvent de petit exercice d'introduction lors d'un entretien technique.

Mon test dans la console :

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


Source : Wikipedia — Fizz buzz

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Explique pourquoi FizzBuzz est un exercice courant en entretien de programmation ». J'ai vérifié le principe de l'exercice avec la source indiquée.

M2 — Le distributeur automatique (DAB)

Question : Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

La méthode toLocaleString() transforme un nombre en texte en utilisant les règles de présentation d'une langue ou d'une région. Pour afficher un espace comme séparateur des milliers, on peut choisir la locale française fr-FR. Le nombre 75000 sera alors présenté sous la forme 75 000. Le résultat obtenu est une chaîne de caractères.

Mon test dans la console :

const montant = 75000;
console.log(montant.toLocaleString("fr-FR")); // "75 000" (espace de groupement)
console.log(typeof montant.toLocaleString("fr-FR")); // "string"


Source : MDN — Number.prototype.toLocaleString()

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Comment formater 75000 en 75 000 avec toLocaleString() en JavaScript ? ». J'ai vérifié la méthode et la locale sur MDN.

M3 — Le détecteur de champs vides (Truthy / Falsy)

Question : Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

Ma réponse (avec mes mots, 3 à 5 lignes) :

Les valeurs falsy sont les valeurs qui deviennent false lorsqu'elles sont converties en booléen. En JavaScript, elles sont false, 0, -0, 0n, "", null, undefined et NaN. Le cas particulier document.all est également falsy dans les environnements où il existe. Toutes les autres valeurs sont truthy, y compris les tableaux et les objets vides.

Mon test dans la console :

const valeurs = [false, 0, -0, 0n, "", null, undefined, NaN];

for (const valeur of valeurs) {
  console.log(valeur, Boolean(valeur));
}
// Chaque valeur affiche false pour sa conversion en booléen.


Source : MDN — Valeurs falsy

IA utilisée ? (prompt + vérification sur MDN) : Oui. Prompt : « Donne la liste complète des valeurs falsy en JavaScript ». J'ai vérifié la liste sur MDN.

M4 — Le score par défaut : || contre ??

Question : Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

Ma réponse (avec mes mots, 3 à 5 lignes) :

L'opérateur ?? utilise la valeur de droite uniquement si celle de gauche vaut null ou undefined. L'opérateur ||, lui, utilise la valeur de droite si celle de gauche est falsy, par exemple 0, false ou une chaîne vide. Ainsi, `??