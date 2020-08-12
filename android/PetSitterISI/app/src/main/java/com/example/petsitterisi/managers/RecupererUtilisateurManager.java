package com.example.petsitterisi.managers;
import android.content.Context;
import android.widget.TextView;

import com.example.petsitterisi.services.ApiRecupererUtilisateurFetcher;
import com.example.petsitterisi.services.ApiUtilisateurFetcher;

import org.json.JSONException;
import org.json.JSONObject;
public class RecupererUtilisateurManager {


    public static void getUtilisateur(Context context, int id) {

        //creation du Json
        JSONObject connexionJson = new JSONObject();
        try {

            //connexion a l'Api
            ApiRecupererUtilisateurFetcher apiFetcher = new ApiRecupererUtilisateurFetcher(context);

            String url = "https://pets-friendly.herokuapp.com/utilisateurs/recuperation/"+id;

            apiFetcher.execute(url);

        }catch (Exception e) {
        e.printStackTrace();
    }

    }





}
