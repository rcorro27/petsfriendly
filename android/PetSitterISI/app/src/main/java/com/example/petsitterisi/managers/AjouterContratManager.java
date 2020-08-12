package com.example.petsitterisi.managers;
import android.content.Context;

import com.example.petsitterisi.entitees.Service;
import com.example.petsitterisi.services.ApiAjouterContratFetcher;
import com.example.petsitterisi.services.ApiRechercheFetcher;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Date;
public class AjouterContratManager {


    public static void getContrat(Context context, int id_facture, String date_debut, String date_fin, boolean est_accepte, boolean est_termine,  boolean est_lu_proprietaire, boolean est_lu_pet_sitter, boolean est_lu_disponible, boolean encore_disponible, String date_creation) throws JSONException {

        //creation du Json
        JSONObject ajoutContrat = new JSONObject(); // Json principal qui contient 1 autre objet Json "contrat"
        JSONObject unContrat = new JSONObject(); // objet1 Json contenant les services de base
        ajoutContrat.put("contrat", unContrat);


        try {

            unContrat.put("id_facture",id_facture);
            unContrat.put("date_debut",date_debut);
            unContrat.put("date_fin",date_fin);
            unContrat.put("est_accepte",est_accepte);
            unContrat.put("est_termine",est_termine);
            unContrat.put("est_lu_proprietaire",est_lu_proprietaire);
            unContrat.put("est_lu_pet_sitter",est_lu_pet_sitter);
            unContrat.put("est_lu_disponible",est_lu_disponible);
            unContrat.put("encore_disponible",encore_disponible);
            unContrat.put("date_creation",date_creation);

            //connexion a l'Api
            ApiAjouterContratFetcher apiFetcher = new ApiAjouterContratFetcher(context);
            apiFetcher.execute("https://pets-friendly.herokuapp.com/contrats/ajout", ajoutContrat.toString());

        }catch (JSONException e) {
            e.printStackTrace();
        }


    }



}
