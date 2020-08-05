class Planning {
    constructor(id, id_contrat, id_proprietaire, id_petsitter, date_debut, date_fin)
    {
        this._id = id
        this._id_contrat = id_contrat
        this._id_proprietaire = id_proprietaire
        this._id_petsitter = id_petsitter
        this._date_debut = date_debut
        this._date_fin = date_fin
    }

    /* ######################################### GETTER #########################################*/

    get id(){
        return this._id
    }
    get id_contrat(){
        return this._id_contrat
    }
    get id_proprietaire(){
        return this._id_proprietaire
    }
    get id_petsitter(){
        return this._id_petsitter
    }
    get date_debut(){
        return this._date_debut
    }
    get date_fin(){
        return this._date_fin
    }

    /* ######################################### SETTER #########################################*/

    set id(id){
        this._id = id
    }
    set id_contrat(id_contrat){
        this._id_contrat = id_contrat
    }
    set id_proprietaire(id_proprietaire){
        this._id_proprietaire = id_proprietaire
    }
    set id_petsitter(id_petsitter){
        this._id_petsitter = id_petsitter
    }
    set date_debut(date_debut){
        this._date_debut = date_debut
    }
    set date_fin(date_fin){
        this._date_fin = date_fin
    }
}
