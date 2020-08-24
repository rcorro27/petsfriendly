package com.example.petsitterisi.services;


import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.example.petsitterisi.BottomNavigationBar;
import com.example.petsitterisi.R;
import com.example.petsitterisi.managers.UtilisateurManager;
import com.google.android.material.textfield.TextInputEditText;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;
public class ApiListChatFetcher extends AsyncTask<String, Nullable, String> {

    private Context  context;
    LinearLayout ll;
    SharedPreferences sharedpreferences;
    LinearLayout card_chat_select;

    Button icone_suivant;


    public ApiListChatFetcher(Context  context, LinearLayout llParam) {
        this.context = context;
        this.ll = llParam;
        sharedpreferences = context.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);

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
                InputStream stream = context.getAssets().open("resultat_chat.json");
                int size = stream.available();
                byte[] buffer = new byte[size];
                stream.read(buffer);
                stream.close();
                tContents = new String(buffer);

            JSONArray jsonArray = new JSONArray(tContents);

            for(int i = 0; i < jsonArray.length(); i++){

                JSONObject chatJsonObject = jsonArray.getJSONObject(i);

                View cardChatParam = View.inflate(context , R.layout.card_chat,null);
                card_chat_select = cardChatParam.findViewById(R.id.car_chat_selectionner);

                TextView prenom_chat = cardChatParam.findViewById(R.id.prenom_chat);
                String urlPhoto = chatJsonObject.getString("url_photo");
                ImageView UrlPhotoUtilisateurRecus = (ImageView) cardChatParam.findViewById(R.id.image_message_profile_liste_discussionr);
                final String nom_proprietaire = chatJsonObject.getString("nom");
                final String id_petsitter = chatJsonObject.getString("id_petsitter");
               // String heureMessage = chatJsonObject.getString("date");
             //
                TextView heureMessageRecu = cardChatParam.findViewById(R.id.date_liste_discussion);



                if(id_petsitter.equals("1"))
                {
                    UrlPhotoUtilisateurRecus.setImageResource(R.drawable.kamel);

  //                  // date hardcode
//                    heureMessage = DateConvertisseur(heureMessage);
//                    heureMessageRecu.setText(heureMessage);

                    String sharedPreferencesHeureMsgRecus = UtilisateurManager.getHeureMessageRecus(context);
                    heureMessageRecu.setText(sharedPreferencesHeureMsgRecus);
                    //UrlPhotoUtilisateurRecus.setImageBitmap(myBitmap);

                }
                else if (id_petsitter.equals("2"))
                {
                   UrlPhotoUtilisateurRecus.setImageResource(R.drawable.michel);

//                   // date hardcode
//                    heureMessage = DateConvertisseur(heureMessage);
//                    heureMessageRecu.setText(heureMessage);

                    String sharedPreferencesHeureMsgRecus = UtilisateurManager.getHeureMessageRecus(context);
                    heureMessageRecu.setText(sharedPreferencesHeureMsgRecus);

                    //UrlPhotoUtilisateurRecus.setImageBitmap(myBitmap);
                }



                prenom_chat.setText(nom_proprietaire);



                icone_suivant = cardChatParam.findViewById(R.id.icone_suivant);
                icone_suivant.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = new Intent(context, BottomNavigationBar.class);
                        intent.putExtra("ChatDiscussion", "true");
                        context.startActivity(intent);
                    }
                });


                card_chat_select.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {


                        Intent intent = new Intent(context, BottomNavigationBar.class);
                        intent.putExtra("ChatDiscussion", "true");
                        UtilisateurManager.addNomMessage(context, "nom_chat", nom_proprietaire);
                        context.startActivity(intent);


                    }
                });


                ll.addView(cardChatParam);

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
        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd/MM/yy", Locale.ENGLISH);
        LocalDate date = LocalDate.parse(timestampWithTimeZone, inputFormatter);
        String formattedDate = outputFormatter.format(date);
        return formattedDate;
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
