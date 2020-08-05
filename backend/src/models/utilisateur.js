public class Utilisateur {
    constructor(id, id_role, prenom, nom, age, email,mot_de_passe, sexe, id_adresse, telephone, secteur_action, url_photo, est_valide, est_active, id_activation, date_creation,
                remuneration_petsitter, num_carte_credit, date_expiration_carte_credit, code_securite_carte_credit)
    {
        this._id = id;
        this._id_role = id_role;
        this._prenom = prenom;
        this._nom = nom;
        this._age = age;
        this._email = email;
        this._mot_de_passe = mot_de_passe;
        this._sexe = sexe;
        this._id_adresse = id_adresse;
        this._telephone = telephone;
        this._secteur_action = secteur_action;
        this._url_photo = url_photo;
        this._est_valide = est_valide;
        this._est_active = est_active;
        this._id_activation = id_activation;
        this._date_creation = date_creation;
        this._remuneration_petsitter = remuneration_petsitter;
        this._num_carte_credit = num_carte_credit;
        this._date_expiration_carte_credit = date_expiration_carte_credit;
        this._code_securite_carte_credit = code_securite_carte_credit;
    }
    /* ######################################### GETTER #########################################*/
    get id() {
        return this._id;
    }
    get id_role(){
        return this._id_role;
    }
    get prenom(){
        return this._prenom;
    }
    get nom(){
        return this._nom;
    }
    get age(){
        return this._age;
    }
    get email(){
        return this._email;
    }
    get mot_de_passe(){
        return this._mot_de_passe;
    }
    get sexe(){
        return this._sexe;
    }
    get id_adresse(){
        return this._id_adresse;
    }
    get telephone() {
        return this._telephone;
    }
    get secteur_action() {
        return this._secteur_action;
    }
    get url_photo(){
        return this._url_photo;
    }
    get est_valide(){
        return this._est_valide;
    }

    get est_active(){
        return this._est_active;
    }
    get id_activation(){
        return this._id_activation;
    }
    get date_creation(){
        return this._date_creation;
    }

    get remuneration_petsitter(){
        return this._remuneration_petsitter;
    }
    get num_carte_credit(){
        return this._num_carte_credit;
    }
    get date_expiration_carte_credit(){
        return this._date_expiration_carte_credit;
    }
    get code_securite_carte_credit() {
        return this._code_securite_carte_credit;
    }

    /* ######################################### SETTER #########################################*/
    set id(id) {
        this._id = id;
    }
    set id_role(id_role){
        this._id_role = id_role;
    }
    set prenom(prenom){
        this._prenom = prenom;
    }
    set nom(nom){
        this._nom = nom;
    }
    set age(age){
        this._age = age;
    }
    set email(email){
        this._email = email;
    }
    set mot_de_passe(mot_de_passe){
        this._mot_de_passe = mot_de_passe;
    }
    set sexe(sexe){
        this._sexe = sexe;
    }
    set id_adresse(id_adresse){
        this._id_adresse = id_adresse;
    }
    set telephone(telephone) {
        this._telephone = telephone;
    }
    set secteur_action(secteur_action) {
        this._secteur_action = secteur_action;
    }
    set url_photo(url_photo){
        this._url_photo = url_photo;
    }
    set est_valide(est_valide){
        this._est_valide = est_valide;
    }

    set est_active(est_active){
        this._est_active = est_active;
    }
    set id_activation(id_activation){
        this._id_activation = id_activation;
    }
    set date_creation(date_creation){
        this._date_creation = date_creation;
    }
    set remuneration_petsitter(remuneration_petsitter){
        this._remuneration_petsitter = remuneration_petsitter;
    }
    set num_carte_credit(num_carte_credit){
        this._num_carte_credit = num_carte_credit;
    }
    set date_expiration_carte_credit(date_expiration_carte_credit){
        this._date_expiration_carte_credit = date_expiration_carte_credit;
    }
    set code_securite_carte_credit(code_securite_carte_credit) {
        this._code_securite_carte_credit = code_securite_carte_credit;
    }
}


module.exports = Utilisateur
