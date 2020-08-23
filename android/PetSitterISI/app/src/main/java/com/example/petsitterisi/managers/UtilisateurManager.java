package com.example.petsitterisi.managers;

import android.content.ContentValues;
import android.content.Context;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.text.Editable;

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

    public static final String getMessageContacterInsideDiscussion(Context ctx){

        SharedPreferences sharedpreferences;
        String message_contacter = "";
            try {
            sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
            message_contacter = sharedpreferences.getString("message_contacter", null);
        }catch(Exception e){
            e.printStackTrace();
        }

        if(message_contacter == null){
            message_contacter = "";
        }

        return message_contacter;
    }
    public static final String getMessageInsideDiscussion(Context ctx){

        SharedPreferences sharedpreferences;
        String message_discussion = "";
        try {
            sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
            message_discussion = sharedpreferences.getString("message_discussion", null);
        }catch(Exception e){
            e.printStackTrace();
        }

        if(message_discussion == null){
            message_discussion = "";
        }

        return message_discussion;
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

    public static void addMessageContacterInsideDiscussion(Context ctx, String nom, Editable valeur) {
        SharedPreferences sharedpreferences;
        sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedpreferences.edit();
        editor.putString(nom, String.valueOf(valeur));
        editor.apply();

    }

    public static void addMessageInsideDiscussion(Context ctx, String nom, Editable valeur) {
        SharedPreferences sharedpreferences;
        sharedpreferences = ctx.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedpreferences.edit();
        editor.putString(nom, String.valueOf(valeur));
        editor.apply();
    }





}
