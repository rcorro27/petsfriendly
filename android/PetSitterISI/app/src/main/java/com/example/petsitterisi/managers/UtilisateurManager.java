package com.example.petsitterisi.managers;

import android.content.ContentValues;
import android.content.Context;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.example.petsitterisi.services.ConnexionBd;

public class UtilisateurManager {

    public static final int getIdUtilisateur(Context ctx){

        SharedPreferences sharedpreferences;
        String id_retour = "0";
        try {
            sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
            id_retour = sharedpreferences.getString("id", null);
        }catch(Exception e){
            e.printStackTrace();
        }

        if(id_retour == null){
            id_retour = "0";
        }
return Integer.parseInt(id_retour);
    }

    public static final String getNomChat(Context ctx){

        SharedPreferences sharedpreferences;
        String nom_chat = "";
        try {
            sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
            nom_chat = sharedpreferences.getString("nom_chat", null);
        }catch(Exception e){
            e.printStackTrace();
        }

        if(nom_chat == null){
            nom_chat = "";
        }
        return nom_chat;
    }

    public static final int getIdUtilisateurRole(Context ctx){

        SharedPreferences sharedpreferences;
        String id_role = "0";
        try {
            sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
            id_role = sharedpreferences.getString("id_role", null);
        }catch(Exception e){
            e.printStackTrace();
        }

        if(id_role == null){
            id_role = "0";
        }
        return Integer.parseInt(id_role);
    }

    public static final String getAdresseInfos(Context ctx, String nom){

        SharedPreferences sharedpreferences;
        String valeur = "";
        try {
            sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
            valeur = sharedpreferences.getString(nom, null);
        }catch(Exception e){
            e.printStackTrace();
        }

        if(valeur == null){
            valeur = "";
        }
        return valeur;
    }

    public static void addIdUtilisateur(Context ctx, int id) {
        SharedPreferences sharedpreferences;
        sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedpreferences.edit();
        editor.putString("id", String.valueOf(id));
        editor.commit();
    }

    public static void addIdUtilisateurRole(Context ctx, int id_role) {
        SharedPreferences sharedpreferences;
        sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedpreferences.edit();
        editor.putString("id_role", String.valueOf(id_role));
        editor.commit();
    }

    public static void addAdresseInfos(Context ctx, String nom, String valeur) {
        SharedPreferences sharedpreferences;
        sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedpreferences.edit();
        editor.putString(nom, valeur);
        editor.commit();
    }

    public static void addNomMessage(Context ctx, String nom, String valeur) {
        SharedPreferences sharedpreferences;
        sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedpreferences.edit();
        editor.putString(nom, valeur);
        editor.commit();
    }


}
