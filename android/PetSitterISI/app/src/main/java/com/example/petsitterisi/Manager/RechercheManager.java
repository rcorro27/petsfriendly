package com.example.petsitterisi.Manager;
import android.content.Context;

import com.example.petsitterisi.Entitee.Utilisateur;
import com.example.petsitterisi.services.ApiUtilisateurFetcher;

import org.json.JSONException;
import org.json.JSONObject;
public class RechercheManager {
    /**
     *
     * @param context
     * @param gardez_chez_sitter
     * @param gardez_chez_proprietaire
     * @param promenade
     * @param visite_veterinaire
     * @param type_chien
     * @param type_chat
     * @param date_debut
     * @param date_fin
     * @param lieu_service
     * @param taille_petit
     * @param taille_moyen
     * @param taille_grand
     * @param race_animal
     * @param nom_animal
     * @param age_animal
     * @param sexe_animal
     * @return
     * @throws JSONException
     */
    public static Utilisateur getUtilisateur(Context context, boolean gardez_chez_sitter, boolean gardez_chez_proprietaire, boolean promenade, boolean visite_veterinaire, boolean type_chien, boolean type_chat, String date_debut, String date_fin, String lieu_service, boolean taille_petit,  boolean taille_moyen, boolean taille_grand, String race_animal, String nom_animal, int age_animal, boolean sexe_animal ) throws JSONException {

        Utilisateur utitlisateur = null;
        String jsonStringDuServeur = "";
        //creation du Json
        JSONObject connexionJson = new JSONObject(); //Json principal qui contient 2 autres objets Json (obj1:Service,obj2:Animal)
        JSONObject obj1 = new JSONObject(); // objet1 Json contenant les services
        JSONObject obj2 = new JSONObject(); // objet2 Json contenant les infos de l'animal

        connexionJson.put("service", obj1);
        connexionJson.put("animal", obj2);

        try {
            obj1.put("service_garde_animal", gardez_chez_sitter);
            obj1.put("service_garde_animal", gardez_chez_proprietaire);
            obj1.put("service_promenade", promenade);
            obj1.put("service_medicale", visite_veterinaire);
            obj1.put("service_date_debut_contrat", date_debut);
            obj1.put("service_date debut contrat", date_fin);
            obj1.put("service_lieu", lieu_service);


            obj2.put("Animal_type",type_chien);
            obj2.put("Animal_type",type_chat);
            obj2.put("Animal_taille",taille_petit);
            obj2.put("Animal_taille",taille_moyen);
            obj2.put("Animal_taille",taille_grand);
            obj2.put("Animal_race",race_animal);
            obj2.put("Animal_nom",nom_animal);
            obj2.put("Animal_age",age_animal);
            obj2.put("Animal_sexe",sexe_animal);


            //connexion a l'Api
            ApiUtilisateurFetcher apiFetcher = new ApiUtilisateurFetcher(jsonStringDuServeur);
            apiFetcher.execute("https://pets-friendly.herokuapp.com/utilisateur/connexion", connexionJson.toString());

        }catch (JSONException e) {
            e.printStackTrace();
        }

        return utitlisateur;
    }





}
