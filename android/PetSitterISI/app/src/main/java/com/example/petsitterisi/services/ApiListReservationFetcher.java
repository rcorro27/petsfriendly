package com.example.petsitterisi.services;


import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.example.petsitterisi.BottomNavigationBar;
import com.example.petsitterisi.R;
import com.google.android.material.textfield.TextInputEditText;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
public class ApiListReservationFetcher extends AsyncTask<String, Nullable, String> {

    private Context  context;
    LinearLayout ll;
    SharedPreferences sharedpreferences;
    Button button_commentaire;
    Button button_envoyer_commentaire;
    TextInputEditText commentaire_envoyer;
    Dialog dialog_reservation;


    public ApiListReservationFetcher(Context  context, LinearLayout llParam) {
        this.context = context;
        this.ll = llParam;
        sharedpreferences = context.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        dialog_reservation = new Dialog(context);
    }

    @Override
    protected String doInBackground(String... urls) {

        String result = "";

        try {
            URL url = new URL(urls[0]);


            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setDoOutput(false);
            urlConnection.setDoInput(true);
            urlConnection.setRequestMethod("GET");
            urlConnection.setRequestProperty("Content-Type", "application/json; utf-8");
            urlConnection.connect();

            int codeRetour = urlConnection.getResponseCode();


            if (codeRetour == HttpURLConnection.HTTP_OK) {

                BufferedReader in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

                String line = "";
                while ((line = in.readLine()) != null)
                    result += line;

            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return result;
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
    }

    @SuppressLint({"ResourceAsColor", "SetTextI18n"})
    @Override
    protected void onPostExecute(String s) {
        super.onPostExecute(s);


        try {
            JSONArray jsonArray = new JSONArray(s);

            for(int i = 0; i < jsonArray.length(); i++){
                JSONObject planningJsonObject = jsonArray.getJSONObject(i);
                String idPetSitter = planningJsonObject.getString("id_proprietaire");


            }

        } catch (JSONException e) {
            e.printStackTrace();
        }

        View cardReservationParam = View.inflate(context , R.layout.card_reservation_proprietaire,null);

        button_commentaire = cardReservationParam.findViewById(R.id.button_commentaire);

        button_commentaire.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    afficherAlertDialogReservation();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
        ll.addView(cardReservationParam);


    }
    private void afficherAlertDialogReservation() {

        dialog_reservation.setContentView(R.layout.alert_dialog_commentaire);

        commentaire_envoyer = dialog_reservation.findViewById(R.id.commentaire_envoyer);
        commentaire_envoyer.getText().toString();

        button_envoyer_commentaire = (Button) dialog_reservation.findViewById(R.id.button_envoyer_message);

        button_envoyer_commentaire.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(context, BottomNavigationBar.class);
                intent.putExtra("FeedBack", "true");
                context.startActivity(intent);

            }
        });

        dialog_reservation.show();


    }


    private String inputStreamToString(InputStream is) {
        String rLine = "";
        StringBuilder answer = new StringBuilder();

        InputStreamReader isr = new InputStreamReader(is);

        BufferedReader rd = new BufferedReader(isr);

        String in = "";


        try {
            while ((rLine = rd.readLine()) != null) {
                answer.append(rLine);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return answer.toString();
    }


}
