CREATE TABLE IF NOT EXISTS automates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    description TEXT,
    localisation VARCHAR(100),
    statut ENUM('actif', 'inactif', 'maintenance') DEFAULT 'actif',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS historique (
    id INT AUTO_INCREMENT PRIMARY KEY,
    automate_id INT NOT NULL,
    evenement VARCHAR(255) NOT NULL,
    date_evenement TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (automate_id) REFERENCES automates(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
