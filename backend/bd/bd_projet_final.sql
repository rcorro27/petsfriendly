CREATE DATABASE IF NOT EXISTS petsitter;
USE petsitter;
CREATE TABLE IF NOT EXISTS utilisateur (id INT auto_increment, id_role INT, nom VARCHAR(50), prenom VARCHAR(50), age int, email varchar(50), mot_de_passe varchar(50), sexe char(25), id_adresse int, telephone int, secteur_action varchar(50), url_photo varchar(100), est_disponible bool, est_valide bool, est_active bool, id_activation int, date_creation date, remuneration_petsitter int, num_carte_credit int, date_expiration_carte_credit date, code_securite_carte_credit int);
create table if not exists adresse (id int auto_increment, numero_rue int, nom_rue varchar(50), code_postal varchar(50), ville char(50), pays char(56), numero_appt int);
create table if not exists animal_utilisateur (id int auto_increment, id_proprietaire int, id_petsitter int);
create table if not exists animal (id int auto_increment, race char(50), type_animal char(50), poids_animal int, sexe_animal char(10), nom_animal char(50), age_animal int, url_photo_animal varchar(100), tarif_supplementaire int);
create table if not exists favoris(id int auto_increment, id_petsitter int, id_proprietaire int);
create table if not exists role_utilisateur(id int auto_increment, type_role char(50), definition varchar(200));
create table if not exists planning (id int auto_increment, id_contrat int, id_proprietaire int, id_petsitter int, date_debut date, date_fin date);
create table if not exists service (id int auto_increment, description_service char(200), prix_service varchar(6));
create table if not exists contrat_utilisateur(id int auto_increment, id_contrat int, id_proprietaire int, id_petsitter int, date_application date);
create table if not exists contrat(id int auto_increment, id_facture int, date_debut date, date_fin date, est_accepte bool, est_termine bool, est_lu_proprietaire bool, est_lu_petsitter bool, encore_disponible bool, date_creation date);
create table if not exists feedback(id int auto_increment, id_contrat int, commentaire text, etoile int);
create table if not exists facture(id int auto_increment, id_promotion int, prix varchar(8));
create table if not exists promotion(id int auto_increment, code_promotion varchar(15), pourcentage varchar(4), date_fin date);
create table if not exists promotion_utilisateur(id int auto_increment, id_promotion int, id_proprietaire int, date_application date);


