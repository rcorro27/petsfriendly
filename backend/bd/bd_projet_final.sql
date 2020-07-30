CREATE DATABASE IF NOT EXISTS petsitter;
USE petsitter;
CREATE TABLE IF NOT EXISTS utilisateur
(id INT auto_increment,
 id_role INT,
 nom VARCHAR(50),
 prenom VARCHAR(50),
 age int,
 email varchar(50),
 mot_de_passe varchar(50),
 sexe varchar(25),
 id_adresse int,
 telephone int,
 secteur_action double,
 url_photo varchar(100),
 est_disponible boolean,
 est_valide boolean,
 est_active boolean,
 id_activation int,
 date_creation date,
 remuneration_petsitter int,
 num_carte_credit int,
 date_expiration_carte_credit date,
 code_securite_carte_credit int,
 PRIMARY KEY (id),
 foreign key (id_role) references role_utilisateur(id),
 foreign key (id_adresse) references adresse(id));
 
create table if not exists adresse
(id int auto_increment,
 numero_rue int,
 nom_rue varchar(50),
 code_postal varchar(50),
 ville varchar(50),
 pays varchar(56),
 numero_appt int,
 PRIMARY KEY (id));
 
create table if not exists animal_utilisateur
(id int auto_increment,
 id_proprietaire int,
 id_petsitter int,
 PRIMARY KEY (id),
 foreign key (id_proprietaire) references utilisateur(id),
 foreign key (id_petsitter) references utilisateur(id));
 
create table if not exists animal
(id int auto_increment,
 race varchar(50),
 type_animal varchar(50),
 poids_animal double,
 sexe_animal varchar(10),
 nom_animal varchar(50),
 age_animal int,
 url_photo_animal varchar(100),
 tarif_supplementaire double,
 PRIMARY KEY (id));
 
create table if not exists favoris
(id int auto_increment,
 id_petsitter int,
 id_proprietaire int,
 PRIMARY KEY (id),
 foreign key (id_petsitter) references utilisateur(id),
 foreign key (id_proprietaire) references utilisateur(id));
 
create table if not exists role_utilisateur
(id int auto_increment,
 type_role varchar(50),
 definition varchar(200),
 PRIMARY KEY (id));
 
create table if not exists planning
 (id int auto_increment,
 id_contrat int,
 id_proprietaire int,
 id_petsitter int,
 date_debut date,
 date_fin date,
 PRIMARY KEY (id),
 foreign key (id_petsitter) references utilisateur(id),
 foreign key (id_proprietaire) references utilisateur(id),
 foreign key (id_contrat) references contrat(id));
 
create table if not exists service
 (id int auto_increment,
 description_service varchar(200),
 prix_service double,
 PRIMARY KEY (id));
 
create table if not exists contrat_utilisateur
(id int auto_increment,
 id_contrat int,
 id_proprietaire int,
 id_petsitter int,
 date_application date,
 PRIMARY KEY (id),
 foreign key (id_petsitter) references utilisateur(id),
 foreign key (id_proprietaire) references utilisateur(id),
 foreign key (id_contrat) references contrat(id));
 
create table if not exists contrat
(id int auto_increment,
 id_facture int,
 date_debut date,
 date_fin date,
 est_accepte boolean,
 est_termine boolean,
 est_lu_proprietaire boolean,
 est_lu_petsitter boolean,
 encore_disponible boolean,
 date_creation date,
 PRIMARY KEY (id),
 foreign key (id_facture) references facture(id));
 
create table if not exists feedback
(id int auto_increment,
 id_contrat int,
 commentaire text,
 etoile int,
 PRIMARY KEY (id),
 foreign key (id_contrat) references contrat(id));
 
create table if not exists facture
(id int auto_increment,
 id_promotion int,
 prix double,
 PRIMARY KEY (id),
 foreign key (id_promotion) references promotion (id));
 
create table if not exists promotion
(id int auto_increment,
 code_promotion varchar(5),
 pourcentage double,
 date_fin date,
 PRIMARY KEY (id));
 
create table if not exists promotion_utilisateur
(id int auto_increment,
 id_promotion int,
 id_proprietaire int,
 date_application date,
 PRIMARY KEY (id),
 foreign key (id_promotion) references promotion(id),
 foreign key (id_proprietaire) references utilisateur(id));
 
create table if not exists infos
(id int auto_increment,
 version_infos varchar(200),
 version_images varchar(200));