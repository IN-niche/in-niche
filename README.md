# Be In Niche — MVP landing page (statique)

Landing page en HTML/CSS/JS séparés (3 fichiers), sans dépendance ni build, conforme à la structure "page d'accueil MVP" du guide (héros + 2 CTA + catégories + comment ça marche + prestataires + FAQ + footer).

```
be-in-niche/
├── index.html   → structure et contenu
├── style.css    → design (couleurs, typographie, mise en page, responsive)
├── script.js    → menu mobile (hamburger) + année automatique du footer
└── README.md    → ce fichier
```

**Important : ceci n'est pas WordPress.** Le guide fourni recommande WordPress + Hostinger (hébergement PHP), ce que GitHub Pages ne supporte pas (statique uniquement). Cette page reproduit la même logique MVP — matching manuel, pas de paiement en ligne — mais avec deux formulaires externes (Google Forms) au lieu de WPForms.

## Avant de publier — à remplacer dans `index.html`

1. **Formulaire "Demander un service"** → remplacer `https://forms.gle/REMPLACER-PAR-VOTRE-FORMULAIRE-DEMANDE` (ligne du bloc `#demander`). Champs recommandés par le guide (section 11) : nom/entreprise, téléphone/WhatsApp, email, type de service, description du besoin, budget approximatif, délai, localisation, préférences.
2. **Formulaire "Offrir mes services"** → remplacer `https://forms.gle/REMPLACER-PAR-VOTRE-FORMULAIRE-PRESTATAIRE`. Champs recommandés (section 10) : nom/prénom ou nom professionnel, téléphone/WhatsApp, email, ville, catégorie principale, services proposés, description courte, portfolio/URL, expérience, fourchette de prix, disponibilité.
3. **Numéro WhatsApp** → remplacer les deux occurrences de `212REMPLACER` (bouton flottant + footer) par votre numéro au format international sans le `+` (ex. `2126XXXXXXXX`).
4. **Email de contact** → remplacer `contact@be-in-niche.ma`.
5. **Section Prestataires** → remplacer les 3 profils d'exemple (Studio X, Atelier Nour, Karam Web) par vos premiers prestataires validés, au fur et à mesure des inscriptions.
6. **Conditions d'utilisation / Politique de confidentialité** → les liens `#` du footer pointent vers rien pour l'instant ; à faire valider par un professionnel avant lancement commercial (le guide le recommande explicitement en section 18).

## Publier sur GitHub Pages

1. Créez un nouveau dépôt GitHub, par exemple `be-in-niche` (public).
2. Ajoutez `index.html`, `style.css`, `script.js` (et ce `README.md`) à la racine du dépôt.
3. Dans le dépôt : **Settings → Pages → Source** → sélectionnez la branche `main` et le dossier `/ (root)`.
4. Après quelques minutes, le site est disponible à `https://VOTRE-USER.github.io/be-in-niche/`.
5. (Optionnel) Domaine personnalisé : **Settings → Pages → Custom domain**, puis configurez un enregistrement CNAME chez votre registrar vers `VOTRE-USER.github.io`.

## Suivi manuel des demandes (section 16-17 du guide)

Cette page ne stocke rien : chaque soumission arrive dans les réponses Google Forms. Créez en parallèle un tableau (Google Sheets) avec les colonnes minimales recommandées par le guide :
`Date | Demandeur | Service | Budget | Délai | Prestataire proposé | Statut | Résultat | Montant | Remarque`

## Prochaine étape suggérée

Une fois le pilote validé (données de matching, catégories réellement demandées, taux de conversion), la migration vers WordPress + Hostinger décrite dans le guide reste pertinente pour ajouter comptes utilisateurs, paiement en ligne et matching semi-automatisé — cette landing page statique n'a pas vocation à devenir la plateforme finale.
