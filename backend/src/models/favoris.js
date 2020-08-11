class Favoris {
    constructor(id, id_petsitter, id_proprietaire){
        this._id = id
        this._id_petsitter = id_petsitter
        this._id_proprietaire = id
    }
    /* ######################################### GETTER #########################################*/

    get id(){
        return this._id
    }
    get id_petsitter(){
        return this._id_petsitter
    }
    get id_proprietaire(){
        return this._id_proprietaire
    }

    /* ######################################### GETTER #########################################*/

    set id(id){
        this._id = id
    }
    set id_petsitter(id_petsitter){
        this._id_petsitter = id_petsitter
    }
    set id_proprietaire(id_proprietaire){
        this._id_proprietaire = id_proprietaire
    }

}

module.exports = Favoris
