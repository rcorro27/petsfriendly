INSERT INTO role_utilisateur (type_role, definition) VALUES ('administrateur', 'le administrateur qui gere les donnes par une interface web');
INSERT INTO role_utilisateur (type_role, definition) VALUES ('proprietaire', 'le client chez notre compagnie');
INSERT INTO role_utilisateur (type_role, definition) VALUES ('petsitter', 'le petsitter qui travaille chez notre compagnie');



INSERT INTO adresse (numero_rue, nom_rue, code_postal, ville, province, pays, numero_appt) VALUES (1854, 'jean-talon', 'H2K 3S5', 'Montreal', 'Quebec', 'Canada', 7);

INSERT INTO utilisateur (id_role, nom, prenom, age, email, mot_de_passe, sexe, id_adresse, secteur_action, est_active, id_activation) VALUES (1, 'rufin', 'zia', 23, 'rufin@nassim.com', 'abc123...', 'masculin', 1, 5, true, 5)

