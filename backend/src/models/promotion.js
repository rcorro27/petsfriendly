class Promotion {
    constructor(id, code_promotion, pourcentage, date_fin)
    {
        this._id = id
        this._code_promotion = code_promotion
        this._pourcentage = pourcentage
        this._date_fin = date_fin
    }

    /* ######################################### GETTER #########################################*/

    get id(){
        return this._id
    }
    get code_promotion(){
        return this._code_promotion
    }
    get pourcentage(){
        return this._pourcentage
    }
    get date_fin(){
        return this._date_fin
    }

    /* ######################################### GETTER #########################################*/

    set id(id){
        this._id = id
    }
    set code_promotion(code_promotion){
        this._code_promotion = code_promotion
    }
    set pourcentage(pourcentage){
        this._pourcentage = pourcentage
    }
    set date_fin(date_fin){
        this._date_fin = date_fin
    }
}

module.exports = Promotion