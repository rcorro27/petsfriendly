package com.example.petsitterisi.services;
import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.example.petsitterisi.R;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
public class ApiRecupererUtilisateurFetcher extends AsyncTask<String, Nullable, String> {

    private Context  context;

    String js = "";
    TextView error;

    public ApiRecupererUtilisateurFetcher(Context  context) {
        this.context = context;
    }

    @Override
    protected String doInBackground(String... urls) {
        String result = "";

        try {
            URL url = new URL(urls[0]);


            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setDoOutput(false);
            urlConnection.setDoInput(true);
            urlConnection.setRequestMethod("POST");
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

    @Override
    protected void onPostExecute(String s) {
        super.onPostExecute(s);

        //error.setText(String.valueOf(s));

//        try {
//
//            JSONObject objJsonReponse = new JSONObject(s);
//
//            Iterator<String> itr = objJsonReponse.keys();
//
//            while (itr.hasNext()){
//
//                String key = itr.next();
//
//                JSONObject unUtilisateurJson = objJsonReponse.getJSONObject(key);
//                if(key.equals("utilisateur")){
//
//                    String prenomPetSitter = unUtilisateurJson.getString("prenom");
//
//                }
//                else{
//
//                    String villePetSitter = unUtilisateurJson.getString("ville");
//                }
//
//            }
//
//        } catch (JSONException e) {
//            // Handle exceptions here
//        }



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
