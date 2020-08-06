class Service {
    constructor(id, description, prix_service)
    {
        this._id = id
        this._description = description
        this._prix_service = prix_service
    }

    /* ######################################### GETTER #########################################*/

    get id(){
        return this._id
    }
    get description(){
        return this._description
    }
    get prix_service(){
        return this._prix_service
    }

    /* ######################################### SETTER #########################################*/

    set id(id){
        this._id = id
    }
    set description(description){
        this._description = description
    }
    set prix_service(prix_service){
        this._prix_service = prix_service
    }
}

module.exports = Service