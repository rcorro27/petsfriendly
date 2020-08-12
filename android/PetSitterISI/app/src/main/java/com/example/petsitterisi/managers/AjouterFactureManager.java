package com.example.petsitterisi.managers;
import android.content.Context;

import com.example.petsitterisi.services.ApiAjouterContratFetcher;
import com.example.petsitterisi.services.ApiAjouterFactureFetcher;

import org.json.JSONException;
import org.json.JSONObject;
public class AjouterFactureManager {


    public static void getFacture(Context context, int id_promotion, double prix) throws JSONException {

        //creation du Json
        JSONObject ajoutFacture = new JSONObject(); // Json principal qui contient 1 autre objet Json "uneFacture"
        JSONObject uneFacture = new JSONObject(); // objet1 Json contenant la facture
        ajoutFacture.put("facture", uneFacture);


        try {

            uneFacture.put("id_promotion",id_promotion);
            uneFacture.put("prix",prix);


            //connexion a l'Api
            ApiAjouterFactureFetcher apiFetcher = new ApiAjouterFactureFetcher(context);
            apiFetcher.execute("https://pets-friendly.herokuapp.com/factures/ajout", ajoutFacture.toString());

        }catch (JSONException e) {
            e.printStackTrace();
        }


    }



}
