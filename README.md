
# **Développement d’une Solution de Relevé de Données Process**

Ce projet a pour objectif de concevoir une application permettant de superviser des données industrielles en temps réel, accessible via un tableau de bord interactif. Cette solution est développée dans le cadre d’un TP de 5e année d’ingénieur et vise à offrir une alternative open source flexible et indépendante aux outils de supervision propriétaires.

## **Contexte**
Dans un environnement industriel connecté, le besoin de collecter, analyser et visualiser les données des automates (ou autres dispositifs) en temps réel est primordial. Les solutions propriétaires actuelles présentent des limitations en termes de coût, de flexibilité et d’adaptabilité.  
Ce projet propose une application modulaire, capable de surveiller des variables critiques (a définir) configurées par les utilisateurs, et d’exporter des données historiques au format CSV.

## **Objectifs du Projet**
1. **Indépendance technologique** : Supprimer les coûts de licence liés aux solutions propriétaires.  
2. **Paramétrage des variables** : Fournir une interface intuitive pour configurer les paramètres des automates (adresse IP, variables, fréquence d’enregistrement).  
3. **Supervision en temps réel** : Afficher les données sous forme de graphiques interactifs et dynamiques.  
4. **Export des données historiques** : Faciliter l’analyse avec des exports au format CSV.  
5. **Déploiement rapide** : Assurer une installation simple sur un réseau local.

## **Technologies Utilisées**
- **Frontend** :  
  - HTML, CSS, JavaScript  
  - Frameworks : Bootstrap, Chart.js  
- **Backend** :  
  - Node.js, Express.js  
  - Librairies : Modbus-Serial, Node-cron, Dotenv, Export-To-CSV  
- **Base de Données** : MariaDB  
- **Outils DevOps** : Docker, Docker-Compose, GitHub  

## **Fonctionnalités**
### **Frontend**
- Interface web accessible via navigateur sur réseau local.
- Tableaux de bord interactifs pour visualiser les données.
- Formulaire de paramétrage des automates et variables.

### **Backend**
- API REST pour gérer les interactions avec le frontend.
- Tâches périodiques pour collecter les données des automates.
- Gestion des erreurs de connexion aux dispositifs.
- Export des données historiques.

### **Base de Données**
- Stockage des configurations (IP, variables, fréquences).
- Enregistrement des données collectées avec horodatage.

## **Structure du Projet**
- **Frontend** : Répertoire `frontend/` avec les fichiers HTML, CSS, JS.  
- **Backend** : Répertoire `backend/` contenant le code Node.js.  
- **BDD** : Configuration et scripts de migration dans le répertoire `database/`.  
- **Docker** : Fichiers Dockerfile et docker-compose.yml à la racine.

## **Installation et Déploiement**
1. **Prérequis** :
   - Docker et Docker-Compose installés.
   - Accès à un réseau local.

2. **Étapes** :
   - Cloner le dépôt :  
     ```bash
     git clone <URL-DU-DÉPÔT>
     cd <NOM-DU-RÉPÔT>
     ```
   - Lancer les conteneurs :  
     ```bash
     docker-compose up --build
     ```
   - Accéder à l’application via `http://<IP_LOCAL>:<PORT>`.

## **Utilisation**
1. **Configuration** : Ajoutez les automates et variables à surveiller via l’interface.  
2. **Supervision** : Consultez les données en temps réel.  
3. **Export** : Téléchargez les données historiques au format CSV.

## **Auteurs**
- Eliot HERISSET
- Nicolas DIOT
