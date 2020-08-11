class Facture{
    constructor(id, id_promotion, prix){
        this._id = id
        this._id_promotion = id_promotion
        this._prix = prix
    }
    /* ######################################### GETTER #########################################*/
    get id(){
        return this._id
    }
    get id_promotion(){
        return this._id_promotion
    }
    get prix()
    {
        return this._prix
    }

    /* ######################################### SETTER #########################################*/

    set id(id){
        this._id = id
    }
    set id_promotion(id_promotion){
        this._id_promotion = id_promotion
    }
    set prix(prix){
        this._prix = prix
    }
}

module.exports = Facture
