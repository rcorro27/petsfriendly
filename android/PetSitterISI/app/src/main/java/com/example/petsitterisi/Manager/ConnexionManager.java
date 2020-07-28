package com.example.petsitterisi.Manager;

import android.content.Context;

import com.example.petsitterisi.Entitee.Utilisateur;
import com.example.petsitterisi.services.ApiUtilisateurFetcher;

import org.json.JSONException;
import org.json.JSONObject;

public class ConnexionManager {


    public static Utilisateur getUtilisateur(Context context, String mail, String mot_de_passe) {

        Utilisateur utitlisateur = null;
        String jsonStringDuServeur = "";
        //creation du Json
        JSONObject connexionJson = new JSONObject();
        try {
            connexionJson.put("e-mail", mail);
            connexionJson.put("mot_de_passe", mot_de_passe);
            //connexion a l'Api
            ApiUtilisateurFetcher piFetcher = new ApiUtilisateurFetcher(jsonStringDuServeur);
            piFetcher.execute("localhost:80/utilisateur/connexion", connexionJson.toString());

        }catch (JSONException e) {
            e.printStackTrace();
        }

        return utitlisateur;
    }

}
