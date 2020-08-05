class Animal {
    constructor(id, race, type_animal, poids_animal, sexe_animal, nom_animal, age_animal, url_photo_animal, tarif_supplementaire){
        this._id = id
        this._race = race
        this._type_animal = type_animal
        this._poids_animal = poids_animal
        this._sexe_animal = sexe_animal
        this._nom_animal = nom_animal
        this._age_animal = age_animal
        this._photo_url_animal = url_photo_animal
        this._tarif_supplementaire = tarif_supplementaire
    }

    /* ######################################### GETTER #########################################*/

    get id(){
        return this._id
    }

    get race(){
        return this._race
    }
    get type_animal(){
        return this._type_animal
    }
    get poids_animal(){
        return this._poids_animal
    }
    get sexe_animal(){
        return this._sexe_animal
    }
    get nom_animal(){
        return this._nom_animal
    }
    get age_animal(){
        return this._age_animal
    }
    get photo_url_animal(){
        return this._photo_url_animal
    }
    get tarif_supplementaire(){
        return this._tarif_supplementaire
    }

    /* ######################################### SETTER #########################################*/

    set id(id){
        this._id = id
    }
    set race(race){
        this._race = race
    }
    set type_animal(type_animal){
        this._type_animal = type_animal
    }
    set poids_animal(poids__animal){
        this._poids_animal = poids__animal
    }
    set sexe_animal(sexe_animal){
        this._sexe_animal = sexe_animal
    }
    set nom_animal(nom_animal){
        this._nom_animal = nom_animal
    }
    set age_animal(age_animal){
        this._age_animal = age_animal
    }
    set photo_url_animal(photo_url_animal){
        this._photo_url_animal = photo_url_animal
    }
    set tarif_supplementaire(tarif_supplementaire){
        this._tarif_supplementaire = tarif_supplementaire
    }
}
