package com.example.petsitterisi.services;


import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Build;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

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
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Objects;
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

//        String result = "";
//
//        try {
//            URL url = new URL(urls[0]);
//
//
//            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
//            urlConnection.setDoOutput(false);
//            urlConnection.setDoInput(true);
//            urlConnection.setRequestMethod("GET");
//            urlConnection.setRequestProperty("Content-Type", "application/json; utf-8");
//            urlConnection.connect();
//
//            int codeRetour = urlConnection.getResponseCode();
//
//
//            if (codeRetour == HttpURLConnection.HTTP_OK) {
//
//                BufferedReader in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
//
//                String line = "";
//                while ((line = in.readLine()) != null)
//                    result += line;
//
//            }
//
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//
              return "";
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @SuppressLint({"ResourceAsColor", "SetTextI18n"})
    @Override
    protected void onPostExecute(String s) {
        super.onPostExecute(s);

        try {

            String tContents = "";
            String concat = "";
            try {
                InputStream stream = context.getAssets().open("reponse_ajouter_recuperer_contrat.json");
                int size = stream.available();
                byte[] buffer = new byte[size];
                stream.read(buffer);
                stream.close();
                tContents = new String(buffer);

            JSONArray jsonArray = new JSONArray(tContents);

            for(int i = 0; i < jsonArray.length(); i++){

                JSONObject reservationJsonObject = jsonArray.getJSONObject(i);

//                String idPetSitter = reservationJsonObject.getString("id_petsitter");
//                String idProprietaire = reservationJsonObject.getString("id_proprietaire");
                String dateDebut = reservationJsonObject.getString("date_debut");
                String dateFin = reservationJsonObject.getString("date_fin");
                String dateReservation = reservationJsonObject.getString("date_creation");

                View cardReservationParam = View.inflate(context , R.layout.card_reservation_proprietaire,null);

                TextView dateDebutContratReservationProprietaire = cardReservationParam.findViewById(R.id.date_debut_contrat_demande);
                TextView dateFinContratReservationProprietaire = cardReservationParam.findViewById(R.id.date_fin_contrat_demande);
                TextView dateReservationReservationProprietaire = cardReservationParam.findViewById(R.id.date_reservation_demande);


                dateReservationReservationProprietaire.setText(dateReservation);

                dateDebut = DateConvertisseur(dateDebut);
                dateFin = DateConvertisseur(dateFin);

                dateDebutContratReservationProprietaire.setText(dateDebut);
                dateFinContratReservationProprietaire.setText(dateFin);

                dateReservation = DateConvertisseur(dateReservation);
                dateReservationReservationProprietaire.setText("Reservation faite le "+ dateReservation);


                button_commentaire = cardReservationParam.findViewById(R.id.button_commentaire);

                button_commentaire.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                            afficherAlertDialogReservation();

                    }
                });
                ll.addView(cardReservationParam);

            }


        } catch (JSONException e) {
            e.printStackTrace();
        }





    }catch (Exception e)
        {
            e.printStackTrace();
        }
    }



    @RequiresApi(api = Build.VERSION_CODES.O)
    private String DateConvertisseur(String timestampWithTimeZone){
        DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd-MM-yyy", Locale.ENGLISH);
        LocalDate date = LocalDate.parse(timestampWithTimeZone, inputFormatter);
        String formattedDate = outputFormatter.format(date);
        return formattedDate;
    }


    private void afficherAlertDialogReservation() {

        dialog_reservation.setContentView(R.layout.alert_dialog_commentaire);

        commentaire_envoyer = dialog_reservation.findViewById(R.id.commentaire_envoyer);
        Objects.requireNonNull(commentaire_envoyer.getText()).toString();

        try {
            button_envoyer_commentaire = (Button) dialog_reservation.findViewById(R.id.button_envoyer_commentaire);
            button_envoyer_commentaire.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(context, BottomNavigationBar.class);
                    intent.putExtra("FeedBack", "true");
                    context.startActivity(intent);
                }
            });
        }catch (Exception e)
        {
            e.printStackTrace();
        }

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
