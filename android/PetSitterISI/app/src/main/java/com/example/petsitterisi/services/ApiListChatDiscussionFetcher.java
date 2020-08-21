package com.example.petsitterisi.services;


import android.annotation.SuppressLint;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Build;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.example.petsitterisi.R;
import com.example.petsitterisi.managers.UtilisateurManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
public class ApiListChatDiscussionFetcher extends AsyncTask<String, Nullable, String> {

    private Context  context;
    LinearLayout ll;
    SharedPreferences sharedpreferences;
    TextView item_message_recu;
    TextView item_message_envoye;


    public ApiListChatDiscussionFetcher(Context  context, LinearLayout llParam) {
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
    @SuppressLint({"ResourceAsColor", "SetTextI18n", "WrongViewCast"})
    @Override
    protected void onPostExecute(String s) {
        super.onPostExecute(s);

        try {

            String tContents = "";
            String concat = "";
            try {
                InputStream stream = context.getAssets().open("chat_discussions.json");
                int size = stream.available();
                byte[] buffer = new byte[size];
                stream.read(buffer);
                stream.close();
                tContents = new String(buffer);

            JSONArray jsonArray = new JSONArray(tContents);



                View headerChat = View.inflate(context , R.layout.header_footer_chat,null);
                ll.addView(headerChat);

                TextView nomInterlocuteur = headerChat.findViewById(R.id.nom_utilsateur_message_recus);
                String non_chat_header = UtilisateurManager.getNomChat(context);

                nomInterlocuteur.setText(non_chat_header);

            for(int i = 0; i < jsonArray.length(); i++){

                JSONObject chatJsonObject = jsonArray.getJSONObject(i);

                String idUtlisateur = chatJsonObject.getString("id_utlisateur");
                String nomUtilisateur = chatJsonObject.getString("name");
                String urlImage = chatJsonObject.getString("url_photo");
                String messageConversation = chatJsonObject.getString("discussion");
                String heureMessage = chatJsonObject.getString("date");
                //String messageEstLu = chatJsonObject.getString("message_est_lu");
                //String messageAEteLu = chatJsonObject.getString("a_lu");





                if (idUtlisateur.equals("1")  ) // message envoyer de michel
                {
                     View cardMessageEnvoyerParam = View.inflate(context , R.layout.activity_item_message_envoyer,null);


                    TextView heureMessageEnvoyer = cardMessageEnvoyerParam.findViewById(R.id.text_message_time_envoyer);
                    TextView messageEnvoyer = cardMessageEnvoyerParam.findViewById(R.id.text_message_body_envoyer);
//                    ImageView messageLu = cardMessageEnvoyerParam.findViewById(R.id.image_message_lu);
                    //final Editable textMsgEnvoyer ;

                    heureMessage = DateConvertisseur(heureMessage);
                    heureMessageEnvoyer.setText(heureMessage);

                    messageEnvoyer.setText(messageConversation);


//                    textMsgEnvoyer = editTextConversation.getText();
//
//                    btn_envoyer_discussion.setOnClickListener(new View.OnClickListener() {
//                        @Override
//                        public void onClick(View v) {
//
//                            messageEnvoyer.setText(textMsgEnvoyer);
//                            ll.addView(cardMessageEnvoyerParam);
//                        }
//                    });



                    ll.addView(cardMessageEnvoyerParam);



                    //item_message_envoye = cardMessageEnvoyerParam.findViewById(R.id.text_message_body_envoyer);




                }
                else if(idUtlisateur.equals("2")){ //  message recus de kamel

                    View cardMessageRecuParam =  View.inflate(context , R.layout.activity_item_message_recus,null);

                    TextView heureMessageRecu = cardMessageRecuParam.findViewById(R.id.text_message_time_recus);
                    TextView messageRecu = cardMessageRecuParam.findViewById(R.id.text_message_body_recu);
                    TextView nomUtilisateurRecus = cardMessageRecuParam.findViewById(R.id.text_message_name_recus);
                    ImageView UrlPhotoUtilisateurRecus = cardMessageRecuParam.findViewById(R.id.image_message_profile);
                    ImageView messageLu = cardMessageRecuParam.findViewById(R.id.image_message_lu);


                   // String.valueOf(messageAEteLu.equals("true"));

                    heureMessage = DateConvertisseur(heureMessage);
                    heureMessageRecu.setText(heureMessage);

                    //messageLu.setImageResource(R.drawable.icone_message_lu);

                    messageRecu.setText(messageConversation);

                    nomUtilisateurRecus.setText(non_chat_header);

                    UrlPhotoUtilisateurRecus.setImageResource(R.drawable.rectangle_66);



//                     if (!messageAEteLu.equals("false")){
//                      messageLu.setImageResource(R.drawable.icone_message_lu);
//                      //messageEstLu = chatJsonObject.put("message_est_lu", msgLu).toString();
//                     //String.valueOf(messageEstLu.equals("true"));
//                  }

                   // item_message_recu =  cardMessageRecuParam.findViewById(R.id.text_message_body_recu);

                    ll.addView(cardMessageRecuParam);

                }



            }


        } catch (JSONException e) {
            e.printStackTrace();
        }


    }catch (Exception e)
        {
            e.printStackTrace();
        }


//        View footerChat = View.inflate(context , R.layout.footer_bar_chat,null);
//        ll.addView(footerChat);

    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    private String DateConvertisseur(String timestampWithTimeZone){
        DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd-MM-yy", Locale.ENGLISH);
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
