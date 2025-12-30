# Instructions pour pousser le projet sur GitHub

## ✅ Étape 1 : Créer le repository sur GitHub

1. Allez sur https://github.com/new
2. **Repository name** : `YNOV`
3. **Description** (optionnel) : "Site web YNOV-AFRIK - Solutions IT complètes"
4. Choisissez **Public** ou **Private**
5. **NE COCHEZ PAS** "Add a README file", "Add .gitignore", ou "Choose a license"
6. Cliquez sur **"Create repository"**

## ✅ Étape 2 : Pousser le code

Une fois le repository créé, exécutez ces commandes dans le terminal :

```bash
cd "C:\Users\UTILISATEUR\Videos\ynov-main (1)\ynov-main"
git push -u origin ynov
```

Si vous voulez pousser sur la branche `main` au lieu de `ynov` :

```bash
git checkout -b main
git push -u origin main
```

## 🔄 Alternative : Si le repository existe déjà avec un autre nom

Si vous avez déjà créé le repository avec un nom différent, modifiez le remote :

```bash
git remote set-url origin https://github.com/filelien/VOTRE_NOM_REPO.git
git push -u origin ynov
```

## 📝 Note

Le remote est déjà configuré pour pointer vers :
- **URL** : `https://github.com/filelien/YNOV.git`
- **Branche actuelle** : `ynov`

Il vous suffit de créer le repository sur GitHub et de pousser le code !

