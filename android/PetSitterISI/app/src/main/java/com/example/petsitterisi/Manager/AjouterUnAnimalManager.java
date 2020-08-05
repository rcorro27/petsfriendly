package com.example.petsitterisi.Manager;
import android.content.Context;

import com.example.petsitterisi.Entitee.Animal;
import com.example.petsitterisi.Entitee.Service;
import com.example.petsitterisi.services.ApiAjouterAnimal;
import com.example.petsitterisi.services.ApiRechercheFetcher;

import org.json.JSONException;
import org.json.JSONObject;
public class AjouterUnAnimalManager {

    public static Animal getAnimal(Context context, String race , String typeAnimal , Double poidsAnimal , boolean sexeAnimal, String nom , int age) throws JSONException {

        Animal informations_animal = null;
        String jsonStringDuServeur = "";

        //creation du Json
        JSONObject ajouterAnimal = new JSONObject();
        JSONObject infos_animal = new JSONObject();
        ajouterAnimal.put("Animal", infos_animal);

        try {

            infos_animal.put("Animal_type",race);
            infos_animal.put("Animal_type",typeAnimal);
            infos_animal.put("Animal_type",poidsAnimal);
            infos_animal.put("Animal_type",sexeAnimal);
            infos_animal.put("Animal_type",nom);
            infos_animal.put("Animal_type",age);

            //connexion a l'Api
            ApiAjouterAnimal apiFetcher = new ApiAjouterAnimal(jsonStringDuServeur);
            apiFetcher.execute("https://pets-friendly.herokuapp.com/animaux/ajout", ajouterAnimal.toString());

        }catch (JSONException e) {
            e.printStackTrace();
        }

        return informations_animal;
    }


}
