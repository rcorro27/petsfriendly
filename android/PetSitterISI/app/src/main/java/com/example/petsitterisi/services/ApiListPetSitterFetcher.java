package com.example.petsitterisi.services;

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
import com.example.petsitterisi.managers.UtilisateurManager;
import com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;

public class ApiListPetSitterFetcher extends AsyncTask<String, Nullable, String> {

    private Context  context;
    LinearLayout ll;
    SharedPreferences sharedpreferences;


    public ApiListPetSitterFetcher(Context  context, LinearLayout llParam) {
        this.context = context;
        this.ll = llParam;
        sharedpreferences = context.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
    }

    @Override
    protected String doInBackground(String... urls) {

        return "";
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
    }

    @Override
    protected void onPostExecute(String s) {
        super.onPostExecute(s);

        String tContents = "";
        String concat = "";
        try {
            InputStream stream = context.getAssets().open("resultat-recherche.json");
            int size = stream.available();
            byte[] buffer = new byte[size];
            stream.read(buffer);
            stream.close();
            tContents = new String(buffer);

            JSONObject obj = new JSONObject(tContents);
            JSONArray jsonArray = new JSONArray();
            jsonArray.put(obj);

            for(int i = 0; i < jsonArray.length(); i++){
                JSONObject jsonObject = (JSONObject) jsonArray.get(i);
                Iterator<String> itr = jsonObject.keys();

                while(itr.hasNext()){
                    String key = itr.next();
                    JSONArray newJsonArray = jsonObject.getJSONArray(key);
                    for(int j = 0; j < newJsonArray.length(); j++) {
                        JSONObject jsObject = newJsonArray.getJSONObject(j);

                        View cardPetSitterParam = View.inflate(context , R.layout.card_pet_sitter,null);
                        TextView petSitterName = cardPetSitterParam.findViewById(R.id.name);
                        petSitterName.setText(jsObject.getString("nom"));

                        JSONArray petSitterServiceStringArray = jsObject.getJSONArray("services");

                        for(int k = 0; k <  petSitterServiceStringArray.length(); k++){
                            String idService = petSitterServiceStringArray.getString(k);

                            String descriptionService = sharedpreferences.getString("description_service_"+idService, null);
                            String prixService = sharedpreferences.getString("prix_service_"+idService, null);


                        }






                        ll.addView(cardPetSitterParam);

                        ExtendedFloatingActionButton reservation = cardPetSitterParam.findViewById(R.id.reservation);

                        reservation.setOnClickListener(new View.OnClickListener() {
                            @Override
                            public void onClick(View v) {
                                      //alert dialogue
                            }
                        });


                        //recuperation de tableau de des id service ce chaque petsitter

                        //Boucler sur le tableau pis prendre chaque id de service

                        //id => 3,  6,  2

                        JSONArray jsonArrayservices = jsObject.getJSONArray("services");

                        for(int k = 0; k < jsonArray.length(); k++) {
                            JSONObject jsonObjectServices = (JSONObject) jsonArray.get(i);
                            Iterator<String> itrServices = jsonObject.keys();

                            while (itrServices.hasNext()) {
                                String servicesKey = itr.next();

                            }

                        }








                    }

                }

            }




        } catch (IOException | JSONException e) {
            // Handle exceptions here

        }

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
