class Adresse
{
    constructor(id, numero_rue, nom_rue, code_postal, ville, province, pays, numero_appt) {
        this._id = id
        this._numero_rue = numero_rue
        this._nom_rue = nom_rue
        this._code_postal = code_postal
        this._ville = ville
        this._province = province
        this._pays = pays
        this._numero_appt = numero_appt
    }

    /* ######################################### GETTER #########################################*/

    get id(){
        return this._id
    }
    get numero_rue(){
        return this._numero_rue
    }
    get nom_rue(){
        return this._nom_rue
    }
    get code_postal(){
        return this._code_postal
    }
    get ville(){
        return this._ville
    }
    get province(){
        return this._province
    }
    get pays(){
        return this._pays
    }
    get numero_appt(){
        return this._numero_appt
    }

    /* ######################################### SETTER #########################################*/

    set id(id){
        this._id = id
    }
    set numero_rue(numero_rue){
        this._numero_rue = numero_rue
    }
    set nom_rue(nom_rue){
        this._nom_rue = nom_rue
    }
    set code_postal(code_postal){
        this._code_postal = code_postal
    }
    set ville(ville){
        this._ville = ville
    }
    set province(province){
        this._province = province
    }
    set pays(pays){
        this._pays = pays
    }
    set numero_appt(numero_appt){
        this._numero_appt = numero_appt
    }
}
