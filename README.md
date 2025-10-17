# ToDoList API avec Express et PostgreSQL

Une API REST simple pour gérer une liste de tâches avec **Node.js**, **Express**, et **PostgreSQL**.



## Fonctionnalités

- Ajouter une tâche (`POST /api/todos`)
- Afficher toutes les tâches (`GET /api/todos`)
- Supprimer une tâche (`DELETE /api/todos/:id`)

---

## Prérequis

- Node.js ≥ 18
- PostgreSQL installé et en fonctionnement
- pgAdmin4 (optionnel mais recommandé)

--- 

## Installation et configuration

### 1/ Cloner le projet
(bash)
git clone https://github.com/<ton-compte>/<nom-du-repo>.git
cd <nom-du-repo>

### 2/ Installer Node.js modules
(bash)
npm install

### 3/ Crée le fichier .env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=TonMotDePassePostgres
DB_NAME=todolist_db
DB_PORT=5432

### 4️/ Créer la base de données et la table PostgreSQL

Ouvre pgAdmin4 ou le terminal psql :

-- Créer la base de données
CREATE DATABASE todolist_db;

-- Se connecter à la base
\c todolist_db

-- Créer la table
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

---

#Lancer le serveur : \
(bash) \
npm run dev

#Mode Production :
npm start
Le serveur écoute par défaut sur : http://localhost:3000
L’API principale : http://localhost:3000/api/todos

#Tester l’API
Ajouter une tâche (POST)
curl -X POST http://localhost:3000/api/todos 
-H "Content-Type: application/json" 
-d '{"title":"Apprendre Express"}'

#Afficher toutes les tâches (GET)
curl http://localhost:3000/api/todos

#Supprimer une tâche (DELETE)
curl -X DELETE http://localhost:3000/api/todos/1

---
