# Exercices d'Entretien - QA Automation E2E

Bienvenue ! Ce projet contient des exercices pratiques pour évaluer vos compétences en automatisation de tests E2E avec Playwright.

## Temps estimé
- Exercice 1 : 15-20 minutes
- Exercice 2 : 20-25 minutes

---

## Exercice 1 : Configuration et Débogage 🐛

### Partie A : Résolution du problème de lancement

#### Contexte
Le projet contient une suite de tests automatisés, mais **les tests ne se lancent pas correctement**. Il y a un problème de configuration.

#### Tâches
1. Installez les dépendances du projet
   ```bash
   npm install
   npx playwright install chromium
   ```

2. Tentez de lancer les tests
   ```bash
   npm test
   ```

3. Identifiez et corrigez le problème de configuration

#### Questions
- Quel était le problème ?
- Où se situait l'erreur ?
- Comment l'avez-vous identifié ?
- Quelle est votre méthodologie pour déboguer un problème de configuration ?

---

### Partie B : Questions sur la configuration Playwright

Maintenant que les tests fonctionnent, analysez le fichier `playwright.config.js` et répondez aux questions suivantes :

1. **À quoi sert la propriété `testDir` ?**
   - Quel est son rôle ?
   - Que se passe-t-il si le chemin est incorrect ?

2. **Expliquez la propriété `baseURL`**
   - À quoi sert-elle ?
   - Comment est-elle utilisée dans les tests ?
   - Quel est l'avantage de l'externaliser ?

3. **Configuration `headless: false`**
   - Que signifie ce paramètre ?
   - Dans quel contexte devrait-il être `true` ?
   - Comment le surcharger en ligne de commande ?

4. **Gestion des screenshots et vidéos**
   ```javascript
   screenshot: 'only-on-failure',
   video: 'retain-on-failure',
   ```
   - Quelle est la différence entre ces deux propriétés ?
   - Quelles autres valeurs sont possibles ?
   - Où sont stockés ces fichiers ?

5. **Configuration des retries**
   ```javascript
   retries: process.env.CI ? 2 : 0
   ```
   - Pourquoi cette différence entre CI et local ?
   - Quels sont les risques des retries trop élevés ?

6. **Workers et parallélisation**
   ```javascript
   fullyParallel: true,
   workers: process.env.CI ? 1 : undefined
   ```
   - Que fait `fullyParallel` ?
   - Pourquoi limiter les workers en CI ?
   - Quelles précautions prendre avec la parallélisation ?

---

## Exercice 2 : Implémentation d'un Test de Login 🚀

### Contexte
Actuellement, seul un test de login avec des credentials invalides existe. Vous devez ajouter un test complet de connexion réussie.

### Spécifications

Créez un nouveau test qui :

1. **Navigue vers la page de login**
2. **Se connecte avec les credentials valides** :
   - Username: `tomsmith`
   - Password: `SuperSecretPassword!`
3. **Vérifie que la connexion est réussie** :
   - L'URL contient `/secure`
   - Un message de succès est affiché (contenant "You logged into a secure area")
   - Un bouton de déconnexion est visible

### Contraintes

- ✅ Respectez le pattern **Page Object Model** existant
- ✅ Ajoutez les locators nécessaires dans `LoginPage.js`
- ✅ Utilisez les **bonnes pratiques Playwright** (await, expect, etc.)
- ✅ Le test doit être ajouté dans `tests/login.spec.js`
- ✅ Nommez le test de manière claire et descriptive

### Indices

<details>
<summary>💡 Cliquez pour voir les locators utiles</summary>

```javascript
// Locators pour la page sécurisée
const SUCCESS_MESSAGE = '#flash';
const LOGOUT_BUTTON = 'a[href="/logout"]';
```
</details>

<details>
<summary>💡 Cliquez pour voir les assertions Playwright utiles</summary>

```javascript
// Vérifier l'URL
await expect(page).toHaveURL(/secure/);

// Vérifier la visibilité
await expect(element).toBeVisible();

// Vérifier le texte
await expect(element).toContainText('Your text');
```
</details>

---

### Questions de Réflexion

Après avoir implémenté votre test, répondez aux questions suivantes :

1. **Architecture**
   - Auriez-vous créé un `SecurePage.js` séparé ? Pourquoi ?
   - Quels sont les avantages/inconvénients de garder tout dans `LoginPage.js` ?

2. **Données de test**
   - Comment pourriez-vous améliorer la gestion des credentials ?
   - Où stocker les credentials valides vs invalides ?

3. **Assertions**
   - Dans quel ordre avez-vous fait vos vérifications ? Pourquoi ?
   - Y a-t-il des assertions redondantes ou manquantes ?

4. **Maintenabilité**
   - Comment rendre ce test plus robuste face aux changements ?
   - Que se passe-t-il si le message de succès change ?

5. **Améliorations possibles**
   - Proposez 2-3 améliorations pour enrichir ce test
   - Quels autres cas de test login ajouteriez-vous ?

---

## Conseils Généraux

- 📖 Prenez le temps de lire et comprendre le code existant
- 🔍 Analysez la structure avant de coder
- 💬 Expliquez vos choix techniques à voix haute
- 🧪 Testez votre code avant de le soumettre
- 📚 N'hésitez pas à consulter la [documentation Playwright](https://playwright.dev)
- ✨ La qualité du code est aussi importante que le résultat fonctionnel

Bon courage ! 🎯