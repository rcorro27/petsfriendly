package com.example.petsitterisi.managers;

import android.content.Context;
import android.widget.TextView;

import com.example.petsitterisi.entitees.Utilisateur;
import com.example.petsitterisi.services.ApiUtilisateurFetcher;

import org.json.JSONException;
import org.json.JSONObject;

public class ConnexionManager {


    public static void getUtilisateur(Context context, String mail, String mot_de_passe, TextView error) {

        //creation du Json
        JSONObject connexionJson = new JSONObject();
        try {
            connexionJson.put("email", mail);
            connexionJson.put("mot_de_passe",  mot_de_passe);
            //connexion a l'Api

            ApiUtilisateurFetcher apiFetcher = new ApiUtilisateurFetcher(context, error);

            apiFetcher.execute("https://pets-friendly.herokuapp.com/utilisateurs/connexion", connexionJson.toString());

        }catch (JSONException e) {
            e.printStackTrace();
        }

    }

}
