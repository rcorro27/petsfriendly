package com.example.petsitterisi.Entitee;

public class Animal {

    private int id;
    private String race;
    private String typeAnimal;
    private Double poidsAnimal;
    private String  sexeAnimal;
    private String  nom;
    private String  prenom;

    public Animal(int id, String race, String typeAnimal, Double poidsAnimal, String sexeAnimal, String nom, String prenom) {
        this.id = id;
        this.race = race;
        this.typeAnimal = typeAnimal;
        this.poidsAnimal = poidsAnimal;
        this.sexeAnimal = sexeAnimal;
        this.nom = nom;
        this.prenom = prenom;
    }

    public int getId() {
        return id;
    }

    public String getRace() {
        return race;
    }

    public String getTypeAnimal() {
        return typeAnimal;
    }

    public Double getPoidsAnimal() {
        return poidsAnimal;
    }

    public String getSexeAnimal() {
        return sexeAnimal;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }
}
