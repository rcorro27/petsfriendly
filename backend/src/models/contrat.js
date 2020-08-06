class Contrat {
    constructor(id, id_facture, date_debut, date_fin, est_accepte, est_termine, est_lu_proprietaire, est_lu_petsitter, encore_disponible, date_creation{
        this._id = id;
        this._id_facture = id_facture;
        this._date_debut = date_debut;
        this._date_fin = date_fin;
        this._est_accepte = est_accepte;
        this._est_termine = est_termine;
        this._est_lu_proprietaire = est_lu_proprietaire;
        this._est_lu_petsitter = est_lu_petsitter;
        this._encore_disponible = encore_disponible;
        this._date_creation = date_creation;
    }
    /* ######################################### GETTER #########################################*/

    get id(){
        return this._id
    }
    get id_facture(){
        return this._id_facture
    }
    get date_debut(){
        return this._date_debut
    }
    get date_fin(){
        return this._date_fin
    }
    get est_accepte(){
        return this._est_accepte
    }
    get est_termine(){
        return this._est_termine
    }
    get est_lu_proprietaire(){
        return this._est_lu_proprietaire
    }
    get est_lu_petsitter(){
        return this._est_lu_petsitter
    }
    get encore_disponible(){
        return this._encore_disponible
    }
    get date_creation(){
        return this._date_creation
    }

    /* ######################################### GETTER #########################################*/

    set id(id){
        this._id = id
    }
    set id_facture(id_facture){
        this._id_facture = id_facture
    }
    set date_debut(date_debut){
        this._date_debut = date_debut
    }
    set date_fin(date_fin){
        this._date_fin = date_fin
    }
    set est_accepte(est_accepte){
        this._est_accepte = est_accepte
    }
    set est_termine(est_termine){
        this._est_termine = est_termine
    }
    set est_lu_proprietaire(est_lu_proprietaire){
        this._est_lu_proprietaire = est_lu_proprietaire
    }
    set est_lu_petsitter(est_lu_petsitter){
        this._est_lu_petsitter = est_lu_petsitter
    }
    set encore_disponible(encore_disponible){
        this._encore_disponible = encore_disponible
    }
    set date_creation(date_creation){
        this._date_creation = date_creation
    }
}