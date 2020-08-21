package com.example.petsitterisi;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petsitterisi.services.ApiAjouterContratFetcher;
import com.google.android.material.textfield.TextInputEditText;
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
    Button button_contacterSitter;
    Dialog dialog_contacter_sitter;
    TextInputEditText message_envoyer;
    Button button_envoyer_message;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View leProfilPetSitter = inflater.inflate(R.layout.activity_profil_pet_sitter, container, false);
        ctx = leProfilPetSitter.getContext();
        button_contacterSitter = leProfilPetSitter.findViewById(R.id.button_contacter_profil_sitter);
        dialog_contacter_sitter = new Dialog(ctx);

        button_contacterSitter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    afficherAlertDialogContacter();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
        getJson(leProfilPetSitter);
        return leProfilPetSitter;




    }
    private void afficherAlertDialogContacter() {

        dialog_contacter_sitter.setContentView(R.layout.alert_dialog_contacter_pet_sitter);

        button_envoyer_message = dialog_contacter_sitter.findViewById(R.id.button_envoyer_message);

        message_envoyer = dialog_contacter_sitter.findViewById(R.id.message_envoyer);
        message_envoyer.getText().toString();

        button_envoyer_message.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(ctx, BottomNavigationBar.class);
                intent.putExtra("ChatDiscussion", "true");
                ctx.startActivity(intent);

            }
        });


        dialog_contacter_sitter.show();
    }
    public void getJson (View leProfilPetSitter) {
        String tContents = "";
        String concat = "";
        try {
            InputStream stream = ctx.getAssets().open("resultat-recuperer-utilisateur.json");
            int size = stream.available();
            byte[] buffer = new byte[size];
            stream.read(buffer);
            stream.close();
            tContents = new String(buffer);

            JSONObject obj = new JSONObject(tContents);

            Iterator<String> itr = obj.keys();

            while (itr.hasNext()){

                String key = itr.next();

                JSONObject unUtilisateurJson = obj.getJSONObject(key);
                if(key.equals("utilisateur")){

                    TextView prenomPetSitterParam = leProfilPetSitter.findViewById(R.id.prenom_pet_sitter);
                    prenomPetSitterParam.setText(unUtilisateurJson.getString("prenom"));

                }
                else{

                    TextView villePetSitter = leProfilPetSitter.findViewById(R.id.ville_pet_sitter);
                    villePetSitter.setText(unUtilisateurJson.getString("ville"));

                }

            }

            //Toast.makeText(getApplicationContext(), tContents, Toast.LENGTH_LONG).show();

        } catch (IOException | JSONException e) {
            // Handle exceptions here

        }
    }




}