package com.example.petsitterisi.managers;

import android.content.Context;

import com.example.petsitterisi.entitees.Utilisateur;
import com.example.petsitterisi.services.ApiUtilisateurFetcher;

import org.json.JSONException;
import org.json.JSONObject;

public class ConnexionManager {


    public static void getUtilisateur(Context context, String mail, String mot_de_passe) {

        //creation du Json
        JSONObject connexionJson = new JSONObject();
        try {
            connexionJson.put("e_mail", mail);
            connexionJson.put("mot_de_passe",  mot_de_passe);
            //connexion a l'Api
            ApiUtilisateurFetcher apiFetcher = new ApiUtilisateurFetcher(context);
            apiFetcher.execute("https://pets-friendly.herokuapp.com/utilisateur/connexion", connexionJson.toString());

        }catch (JSONException e) {
            e.printStackTrace();
        }

    }

}
