class Feedback{
    constructor(id, id_contrat, commentaire, etoiles){
        this._id = id
        this._id_contrat = id_contrat
        this._commentaire = commentaire
        this._etoiles = etoiles
    }
    /* ######################################### GETTER #########################################*/
    get id(){
        return this._id
    }
    get id_contrat(){
        return this._id_contrat
    }
    get commentaire(){
        return this._commentaire
    }
    get etoiles(){
        return this._etoiles
    }

    /* ######################################### SETTER #########################################*/

    set id(id){
        this._id = id
    }
    set id_contrat(id_contrat){
        this._id_contrat = id_contrat
    }
    set commentaire(commentaire){
        this._commentaire = commentaire
    }
    set etoiles(etoiles){
        this._etoiles = etoiles
    }
}

module.exports = Feedback
