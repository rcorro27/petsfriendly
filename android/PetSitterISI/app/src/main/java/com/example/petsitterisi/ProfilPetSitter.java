package com.example.petsitterisi;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonObject;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
public class ProfilPetSitter extends Fragment {
    Context ctx;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View leProfilPetSitter = inflater.inflate(R.layout.activity_profil_pet_sitter, container, false);
        ctx = leProfilPetSitter.getContext();

        return leProfilPetSitter;
        //getJson();

    }


//    public void getJson () {
//        String tContents = "";
//        String concat = "";
//        try {
//            InputStream stream = getAssets().open("resultat-recuperer-utilisateur.json");
//            int size = stream.available();
//            byte[] buffer = new byte[size];
//            stream.read(buffer);
//            stream.close();
//            tContents = new String(buffer);
//
//            JSONObject obj = new JSONObject(tContents);
//
//            Iterator<String> itr = obj.keys();
//
//            while (itr.hasNext()){
//
//                String key = itr.next();
//
//                JSONObject unUtilisateurJson = obj.getJSONObject(key);
//                if(key.equals("utilisateur")){
//
//                    TextView prenomPetSitterParam = findViewById(R.id.prenom_pet_sitter);
//                    prenomPetSitterParam.setText(unUtilisateurJson.getString("prenom"));
//
//                }
//                else{
//
//                    TextView villePetSitter = findViewById(R.id.ville_pet_sitter);
//                    villePetSitter.setText(unUtilisateurJson.getString("ville"));
//
//                }
//
//            }
//
//            //Toast.makeText(getApplicationContext(), tContents, Toast.LENGTH_LONG).show();
//
//        } catch (IOException | JSONException e) {
//            // Handle exceptions here
//
//        }
//    }




}