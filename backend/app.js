const express = require('express');
const ModbusRTU = require('modbus-serial'); // Import du client Modbus

const app = express();
const port = process.env.PORT || 3000;

// Route de base pour vérifier si le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Serveur Modbus fonctionne !');
});

// Démarrage du serveur Express
app.listen(port, () => {
  console.log(`Serveur Express démarré sur le port ${port}`);
});

// Créer un client Modbus
const client = new ModbusRTU();

// Connecter le client Modbus à une ligne TCP
console.log("Tentative de connexion au serveur Modbus...");
client.connectTCP("172.16.1.24", { port: 502 }, function (err) {
  if (err) {
    console.error("Erreur de connexion au serveur Modbus :", err.message);
    return;
  }
  console.log("Connexion au serveur Modbus réussie !");
  
  // Définir l'ID de l'esclave (automate)
  client.setID(1);

  // Lire des registres toutes les 1 seconde
  setInterval(() => {
    client.readCoils(514, 1, function (err, data) {
      if (err) {
        console.error("Erreur de lecture des registres :", err.message);
      } else {
        console.log("Valeurs des registres :", data.data);
      }
    });
  }, 1000);
});
