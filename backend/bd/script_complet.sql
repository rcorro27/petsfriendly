DROP TABLE IF EXISTS role_utilisateur,adresse,promotion,facture,contrat,feedback,utilisateur,animal,animal_utilisateur,favoris,planning,service,service_utilisateur,service_contrat,contrat_utilisateur,promotion_utilisateur,infos_bd;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO vyimtahkffwmmm;

Create table if not exists role_utilisateur
(id SERIAL PRIMARY KEY NOT NULL,
 type_role varchar(50) NOT NULL,
 definition varchar(200) NOT NULL 
);
 
create table if not exists adresse
(id SERIAL PRIMARY KEY NOT NULL,
 numero_rue int NOT NULL,
 nom_rue varchar(50) NOT NULL,
 code_postal varchar(50) NOT NULL,
 ville varchar(50) NOT NULL,
 province varchar(50) NOT NULL,
 pays varchar(56) NOT NULL,
 numero_appt int NULL
);

 create table if not exists promotion
(id SERIAL PRIMARY KEY NOT NULL,
 code_promotion varchar(5) NOT NULL,
 pourcentage DOUBLE PRECISION NOT NULL,
 date_fin date NOT NULL
);

create table if not exists facture
(id SERIAL PRIMARY KEY NOT NULL,
 id_promotion int NOT NULL,
 prix DOUBLE PRECISION NOT NULL,
 foreign key (id_promotion) references promotion (id));
 
create table if not exists contrat
(id SERIAL PRIMARY KEY NOT NULL,
 id_facture int NOT NULL,
 date_debut date NOT NULL,
 date_fin date NOT NULL,
 est_accepte boolean NOT NULL DEFAULT FALSE,
 est_termine boolean NOT NULL DEFAULT FALSE,
 est_lu_proprietaire boolean NOT NULL DEFAULT FALSE,
 est_lu_petsitter boolean NOT NULL DEFAULT FALSE,
 encore_disponible boolean NOT NULL DEFAULT TRUE,
 date_creation date NOT NULL DEFAULT NOW(),
 foreign key (id_facture) references facture(id));
 
 create table if not exists feedback
(id SERIAL PRIMARY KEY NOT NULL,
 id_contrat int NOT NULL,
 commentaire text NULL,
 etoile int NULL,
 foreign key (id_contrat) references contrat(id));

CREATE TABLE IF NOT EXISTS utilisateur
(id SERIAL PRIMARY KEY NOT NULL,
 id_role INT NOT NULL,
 nom VARCHAR(50) NOT NULL,
 prenom VARCHAR(50) NOT NULL,
 age int NOT NULL,
 email varchar(50) NOT NULL,
 mot_de_passe varchar(50) NOT NULL,
 sexe varchar(25) NULL,
 id_adresse int NULL,
 telephone char(10) NULL CHECK (telephone ~ '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
 secteur_action double precision NULL,
 url_photo varchar(100) NULL,
 est_disponible boolean NULL DEFAULT TRUE,
 est_valide boolean NULL DEFAULT FALSE,
 est_active boolean NULL DEFAULT FALSE,
 id_activation VARCHAR(50) NOT NULL,
 date_creation date NULL DEFAULT NOW(),
 remuneration_petsitter double precision NULL,
 num_carte_credit int NULL,
 date_expiration_carte_credit date NULL,
 code_securite_carte_credit int NULL,
 foreign key (id_role) references role_utilisateur(id),
 foreign key (id_adresse) references adresse(id));
 
create table if not exists animal_utilisateur
(id SERIAL PRIMARY KEY NOT NULL,
 id_proprietaire int NOT NULL,
 id_petsitter int NOT NULL,
 foreign key (id_proprietaire) references utilisateur(id),
 foreign key (id_petsitter) references utilisateur(id));
 
create table if not exists animal
(id SERIAL PRIMARY KEY NOT NULL,
 race varchar(50) NULL,
 type_animal varchar(50) NOT NULL,
 poids_animal DOUBLE PRECISION NOT NULL,
 sexe_animal varchar(10) NULL,
 nom_animal varchar(50) NULL,
 age_animal int NULL,
 url_photo_animal varchar(100) NULL
);
 
create table if not exists favoris
(id SERIAL PRIMARY KEY NOT NULL,
 id_petsitter int NOT NULL,
 id_proprietaire int NOT NULL,
 foreign key (id_petsitter) references utilisateur(id),
 foreign key (id_proprietaire) references utilisateur(id));
 
create table if not exists planning
 (id SERIAL PRIMARY KEY NOT NULL,
 id_contrat int NOT NULL,
 id_proprietaire int NOT NULL,
 id_petsitter int NOT NULL,
 date_debut date NOT NULL,
 date_fin date NOT NULL,
 foreign key (id_petsitter) references utilisateur(id),
 foreign key (id_proprietaire) references utilisateur(id),
 foreign key (id_contrat) references contrat(id));
 
create table if not exists service
 (id SERIAL PRIMARY KEY NOT NULL,
 description_service varchar(200) NOT NULL,
 prix_service DOUBLE PRECISION NOT NULL);
 
create table if not exists service_utilisateur
(id SERIAL PRIMARY KEY NOT NULL,
 id_petsitter int NOT NULL,
 id_service varchar(200) NOT NULL 
);
 
Create table if not exists service_contrat
(id SERIAL PRIMARY KEY NOT NULL,
 id_contrat int NOT NULL,
 id_service varchar(200) NOT NULL 
);

create table if not exists contrat_utilisateur
(id SERIAL PRIMARY KEY NOT NULL,
 id_contrat int NOT NULL,
 id_proprietaire int NOT NULL,
 id_petsitter int NOT NULL,
 date_application date NOT NULL DEFAULT NOW(),
 foreign key (id_petsitter) references utilisateur(id),
 foreign key (id_proprietaire) references utilisateur(id),
 foreign key (id_contrat) references contrat(id));
 
create table if not exists promotion_utilisateur
(id SERIAL PRIMARY KEY NOT NULL,
 id_promotion int NOT NULL,
 id_proprietaire int NOT NULL,
 date_application date NOT NULL DEFAULT NOW(),
 foreign key (id_promotion) references promotion(id),
 foreign key (id_proprietaire) references utilisateur(id));
 
create table if not exists infos_bd
(id SERIAL PRIMARY KEY NOT NULL,
 version_infos integer NOT NULL DEFAULT 100,
 version_images integer NOT NULL DEFAULT 110);
 
 
ALTER TABLE feedback ADD COLUMN date_creation date NOT NULL DEFAULT NOW();
ALTER TABLE contrat ALTER COLUMN id_facture DROP NOT NULL;
ALTER TABLE animal_utilisateur ADD COLUMN id_animal int NOT NULL;

 
INSERT INTO role_utilisateur (type_role, definition) VALUES ('administrateur', 'le administrateur qui gere les donnes par une interface web');
INSERT INTO role_utilisateur (type_role, definition) VALUES ('proprietaire', 'le client chez notre compagnie');
INSERT INTO role_utilisateur (type_role, definition) VALUES ('petsitter', 'le petsitter qui travaille chez notre compagnie');

INSERT INTO adresse (numero_rue, nom_rue, code_postal, ville, province, pays, numero_appt) VALUES (1854, 'jean-talon', 'H2K 3S5', 'Montreal', 'Quebec', 'Canada', 7);

INSERT INTO utilisateur (id_role, nom, prenom, age, email, mot_de_passe, sexe, id_adresse, secteur_action, est_active, id_activation) VALUES (1, 'rufin', 'zia', 23, 'rufin@nassim.com', 'abc123...', 'masculin', 1, 5, true, 5);

 