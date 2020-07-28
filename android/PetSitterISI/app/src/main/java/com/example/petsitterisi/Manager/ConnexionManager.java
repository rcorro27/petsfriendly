package com.example.petsitterisi.Manager;

import android.content.Context;

import com.example.petsitterisi.Entitee.Utilisateur;
import com.example.petsitterisi.services.ApiFetcher;

public class ConnexionManager {


    public static Utilisateur getUtilisateur(Context context) {

        Utilisateur utitlisateur = null;
        //connexion a l'Api
        ApiFetcher piFetcher = new ApiFetcher();
        piFetcher.execute("localhost:80/utilisateur/connexion");

        return utitlisateur;
    }

}
