# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-21 10:49 UTC · commit `26193dc` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **11 / 15**

Exercices : **93 / 95** · Parfaits : 17 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **5** | ✅ Parfait | 5/5 | 2 | ✅ | Parfait ! Choix const/let justifiés, 5 types primitifs reconnus et fiche construite avec un seul gabarit littéral.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F2** — Le convertisseur de saisie | **5** | ✅ Parfait | 3/3 | 2 | ❌ | Parfait ! Le piège de la concaténation est identifié, corrigé avec Number() et tes prédictions sont vérifiées.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F4** — Le contrôleur du bus | **5** | ✅ Parfait | 5/5 | 1 | ❌ | Parfait ! Ternaire simple et conditions à trois branches corrects, bornes respectées.<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; pas de lien précis vers une page source (MDN de préférence). |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 2 | ❌ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F6** — Le compte à rebours | **4** | 🟡 Règles non respectées | 2/2 | 2 | ❌ | Les nombres sont bons, mais il faut une boucle `for` qui descend et `continue` pour sauter le 5.<br>• Utilise une boucle `for` qui descend (`i--` ou `i -= 2`).<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M1** — FizzBuzz kinois | **5** | ✅ Parfait | 3/3 | 1 | ❌ | Parfait ! Conditions ordonnées du cas le plus restrictif au plus général, résultat exact de 1 à 30.<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 1 | ❌ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; pas de lien précis vers une page source (MDN de préférence). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **5** | ✅ Parfait | 11/11 | 1 | ❌ | Parfait ! Les valeurs truthy / falsy sont maîtrisées, ternaire sans comparaison.<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **M4** — Le score par défaut : \|\| contre ?? | **4** | 🟡 Règles non respectées | 5/5 | 2 | ✅ | Les résultats sont justes, mais montre la version `\|\|`, corrige avec `??` et explique le bug en commentaire.<br>• `let` jamais réassigné : `estConnecte` → utilise `const`.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M5** — La vitre teintée (portée de bloc) | **5** | ✅ Parfait | 3/3 | 1 | ❌ | Parfait ! Portée de bloc respectée, plus aucune ReferenceError et l'arrêt du programme est expliqué.<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **M6** — Le détective du return | **5** | ✅ Parfait | 5/5 | 0 | ❌ | Parfait ! return et console.log sont bien distingués, le piège de l'ASI est corrigé et expliqué.<br>📚 Recherche non rédigée. |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 0 | ❌ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche non rédigée. |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 0 | ❌ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche non rédigée. |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 0 | ❌ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche non rédigée. |
| **A2** — Le moteur de paie v2 | **5** | ✅ Parfait | 7/7 | 0 | ❌ | Parfait ! Accumulateur avec .forEach(), heures supplémentaires et recherche du maximum corrects.<br>📚 Recherche non rédigée. |
| **A3** — L'inventaire en console | **5** | ✅ Parfait | 7/7 | 0 | ❌ | Parfait ! Tableau d'objets maîtrisé avec filter, map et find, cas undefined géré et vérifié avec console.table().<br>📚 Recherche non rédigée. |
| **A4** — Le classement de la promo | **5** | ✅ Parfait | 9/9 | 0 | ❌ | Parfait ! Fonctions, boucles, conditions et méthodes de tableau bien combinées ; bulletin vérifié avec console.table().<br>📚 Recherche non rédigée. |
| **A5** — Le nombre mystère | **5** | ✅ Parfait | 4/4 | 0 | ❌ | Parfait ! Jeu complet et robuste : saisies invalides refusées sans compter l'essai, 7 essais maximum.<br>📚 Recherche non rédigée. |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Avancé (91 %) | **3** | const par défaut et let uniquement pour les valeurs réassignées, choix justifiés. typeof (y compris null) et conversions Number(''), Number('abc') maîtrisés. Truthy / falsy expliqués.<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Compétent : Satisfaisant (86 %) | **2** | if / else if / else corrects, égalité stricte === systématique, modulo maîtrisé (pair / impair, multiples). Ternaire simple fonctionnel.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Compétent : Satisfaisant (87 %) | **2** | Les fonctions renvoient leur résultat avec return (pas de console.log à l'intérieur) et sont appelées avec les bons arguments. Portée de bloc respectée : aucune ReferenceError.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Avancé (95 %) | **3** | Boucle adaptée choisie (for / while). Tableaux d'objets traités avec .filter(), .map(), .find() et un return dans chaque callback ; cas undefined de .find() géré ; console.table() utilisé.<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | En développement : À améliorer (43 %) | **1** | Recherches partielles ou sans test. Peu de commits (un seul commit en fin de semaine).<br>_Recherches 30 % · commits par exercice 16 % · règles de code 95 %_ |
| **Total** | | **11 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
