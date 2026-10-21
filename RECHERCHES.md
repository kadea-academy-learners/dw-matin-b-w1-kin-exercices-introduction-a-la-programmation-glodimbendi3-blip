# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
C'est une ancienne erreur de JavaScript qui existe depuis sa création. cette erreur a été concervée pour ne pas 
casser les anciens programmes.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
let age = null;
console.log(typeof age);

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

*NaN signifie Not-a-Number; c'est une valeur spéciale de javaScript qui represente un résultat numérique invalide genre qui n'est pas un nombre
*NaN===NaN renvoie false parce que JavaScript considère que NaN n'est égal à aucune valeur, même pas lui même.
*Pour détecter NaN, on utilise Number.isNaN(valeur).

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```Console.log(Number.isNaN(NaN));
Console.log(Number.isNaN(15));

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** oui; Je débute avec JavaScript, je veux que tu m'explique NaN, tu te refere sur MDN.

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

-7 % 2 renvoie -1 car le % renvoie le reste de la division. pour detecter un nombre impair, on peut écrire % 2 === 1 mais si le nombre est negatif la condition échoue donc le methode plus fiable est % 2 ! == 0, parce que nombre entier impair peut avoir un reste égal à 1

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
``` dans mes code j'ai tester 3 methodes 
let nombre = -7; 
console.log(nombre % 2 === 1);//false
 console.log(nombre % 2 !== 0) //true
 nombre= Number("-7");
 console.log (nombre % 2 === 1);

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...oui , c'est déconseillé parce que le code devient difficile.

**Mon test dans la console :**
let temperature = 15;
let resultat = temperature >= 30 ? "chaud" : 
temperature >= 20 ? "Normal" : "Froid";
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```Froid

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
on peut enlever la parenthèse s'il n y a un seul paramètre, les accolades lorsque la fonction contient une seule expression
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const saluer = nom => {
    return "Bonjour " + nom;
};

console.log(saluer("Glodi"));

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...continue sert à saute le tour actuel et passe au tour suivant de la boucle. tandisque break arrête complètement la boucle, même si elle devait continuer.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...parce qu'il permet de vérifier plusieurs compétences fondamentales :
- Les boucles : sais-tu parcourir plusieurs nombres avec for ?
- Les conditions : sais-tu utiliser if, else if et else ?
- Le modulo % : sais-tu vérifier si un nombre est divisible par un autre ?
- L'ordre des conditions : sais-tu vérifier le cas le plus spécifique avant les cas plus généraux ?
- La logique : peux-tu transformer des règles écrites en instructions exécutables ?

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** non

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
console.log(nombre.toLocaleString("fr-FR"));

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```let nombre = 75000;

console.log(nombre.toLocaleString("fr-FR"));
// Résultat : 75 000

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** oui, je debute avec JavaScript, je vais que tu m'apprend la notion (toLocaleString),
méthode : explication simple compréhensible et des exercices demo, à la fin un quiz de 10 questions pour m'évaluer.

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
false	 //La valeur booléenne fausse
0	     //Le nombre zéro
-0	    //Le zéro négatif
0n	    //Le zéro de type BigInt
""	    // Une chaîne vide
null	// L'absence volontaire de valeur
undefined// 	Une valeur non définie
NaN	  // Un résultat numérique invalide

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...?? (coalescence des nuls) permet de donner une valeur par défaut uniquement lorsque la valeur est null ou undefined.
La différence avec || est que || utilise la valeur par défaut lorsque la valeur de gauche est falsy.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```let age = 0;

console.log(age ?? 18); // 0

**Source :** MDN

**IA utilisée ? (prompt + vérification sur MDN) :** Oui, j'apprend JavaScript, aujourd'hui je vais que tu m'apprend la notion ??, 
et sa différence avec ||

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...En JavaScript moderne, on déconseille var principalement parce que sa manière de gérer la portée des variables et le hoisting peut provoquer des erreurs difficiles à repérer. On préfère généralement let et const.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :**MDN 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
