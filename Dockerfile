# Utilisez une image de base contenant Node.js
FROM node:16-alpine

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers du projet dans le conteneur
COPY . /app

# Installez les dépendances
RUN npm install

# Construisez l'application React
RUN npm run build

# Exposez le port sur lequel l'application sera accessible
EXPOSE 3000

# Démarrez l'application lors du lancement du conteneur
CMD ["npm", "start"]
