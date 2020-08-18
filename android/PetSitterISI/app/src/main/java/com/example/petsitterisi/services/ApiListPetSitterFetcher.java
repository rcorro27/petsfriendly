package com.example.petsitterisi.services;


import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Dialog;

import android.annotation.SuppressLint;

import android.app.Dialog;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.example.petsitterisi.BottomNavigationBar;
import com.example.petsitterisi.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DecimalFormat;
import java.util.Iterator;

public class ApiListPetSitterFetcher extends AsyncTask<String, Nullable, String> {

    private Context  context;
    LinearLayout ll;
    SharedPreferences sharedpreferences;
    Button  reservervation_liste_pet_sitter;
    Dialog dialog_reservation;
    TextView prix_ht_facture;
    TextView taxe_tps;
    TextView taxe_tvq;
    TextView prix_ttc_facture;
    Button appliquer_code_promo;
    Button reservation_final;
    Button button_profil;


    public ApiListPetSitterFetcher(Context  context, LinearLayout llParam) {
        this.context = context;
        this.ll = llParam;
        sharedpreferences = context.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        dialog_reservation = new Dialog(context);
    }

    @Override
    protected String doInBackground(String... urls) {

        return "";
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
    }

    @SuppressLint({"ResourceAsColor", "SetTextI18n"})
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
                        final String petSitterId = jsObject.getString("id");
                        petSitterName.setText(jsObject.getString("nom"));
                        button_profil = cardPetSitterParam.findViewById(R.id.button_profil);
                        reservervation_liste_pet_sitter = cardPetSitterParam.findViewById(R.id.reservervation_liste_pet_sitter);

                        button_profil.setOnClickListener(new View.OnClickListener() {
                            @Override
                            public void onClick(View v) {

                                Intent intent = new Intent(context, BottomNavigationBar.class);
                                intent.putExtra("Profil", "true");
                                intent.putExtra("petSitterId", petSitterId);
                                context.startActivity(intent);

                            }
                        });


                        reservervation_liste_pet_sitter.setOnClickListener(new View.OnClickListener() {
                            @Override
                            public void onClick(View v) {
                                try {
                                    afficherAlertDialogReservation();
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }
                        });

                        JSONArray petSitterServiceStringArray = jsObject.getJSONArray("services");

                        for(int k = 0; k <  petSitterServiceStringArray.length(); k++){
                            String idService = petSitterServiceStringArray.getString(k);

                            String descriptionService = sharedpreferences.getString("description_service_"+idService, null);
                            String prixService = sharedpreferences.getString("prix_service_"+idService, null);

                            View serviceView = View.inflate(context , R.layout.service,null);
                            ImageView serviceImage = serviceView.findViewById(R.id.service_image);

                            LinearLayout pet_sitter_services_container = cardPetSitterParam.findViewById(R.id.pet_sitter_services_container);

                            try {
                                if (descriptionService.equals("Promenade")) {
                                    serviceImage.setImageResource(R.drawable.image_16);
                                } else if (descriptionService.equals("Garder chez vous")) {
                                    serviceImage.setImageResource(R.drawable.image_icon_2);
                                } else if (descriptionService.equals("Garder chez le Pet Sitter")) {
                                    serviceImage.setImageResource(R.drawable.image_icon_1);
                                }

                                TextView servicePrix = serviceView.findViewById(R.id.service_prix);
                                servicePrix.setText(prixService + "$");

                                TextView serviceName = serviceView.findViewById(R.id.service_name);
                                serviceName.setText(descriptionService);


                                pet_sitter_services_container.addView(serviceView);
                            }catch(Exception e){
                                e.printStackTrace();
                            }

                        }

                        ll.addView(cardPetSitterParam);




                    }

                }

            }



        } catch (IOException | JSONException e) {
            // Handle exceptions here

        }

    }





    private void afficherAlertDialogReservation() throws JSONException {

        //material_dialog_reservation.setView(R.layout.alert_dialog_reservation);

        JSONArray jsonServiceSelectionnerArray = new JSONArray();

        sharedpreferences = context.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE);
        String serviceSelectId = sharedpreferences.getString("id_service_select", null);
        if(serviceSelectId != null){

            String descriptionService = sharedpreferences.getString("description_service_"+serviceSelectId, null);
            String prixService = sharedpreferences.getString("prix_service_"+serviceSelectId, null);

            JSONObject serviceJson = new JSONObject();
            serviceJson.put("descriptionService", descriptionService );
            serviceJson.put("prixService", prixService);

            jsonServiceSelectionnerArray.put(serviceJson);

        }

        String id_service_promenade_select = sharedpreferences.getString("id_service_promenade_select", null);

        if(id_service_promenade_select != null && id_service_promenade_select != "0"){

            String descriptionService = sharedpreferences.getString("description_service_"+id_service_promenade_select, null);
            String prixService = sharedpreferences.getString("prix_service_"+id_service_promenade_select, null);

            JSONObject serviceJson = new JSONObject();
            serviceJson.put("descriptionService", descriptionService );
            serviceJson.put("prixService", prixService);

            jsonServiceSelectionnerArray.put(serviceJson);

        }

        dialog_reservation.setContentView(R.layout.alert_dialog_reservation);

        double valeurTps = 0.05 ; // 5%
        double valeurTvq = 0.09975; // 9,975%
        float prixHT = 0 ;
        float montantTps = (float) (prixHT * valeurTps);
        float montantTvq = (float) (prixHT *valeurTvq);
        float prixTotal = prixHT + montantTps + montantTvq;

        for(int i = 0; i < jsonServiceSelectionnerArray.length(); i++){
            JSONObject nouveauJsonObject = jsonServiceSelectionnerArray.getJSONObject(i);
            String prixService = nouveauJsonObject.getString("prixService");
            prixHT += Integer.parseInt(prixService);
            montantTps = (float) (prixHT * valeurTps);
            montantTvq = (float) (prixHT *valeurTvq);
            prixTotal = prixHT + montantTps + montantTvq;
        }

            DecimalFormat df = new DecimalFormat("########.00");
            String prixTotalArondissement = df.format(prixTotal);

            prix_ht_facture = (TextView) dialog_reservation.findViewById(R.id.prix_ht_facture);
            prix_ht_facture.setText(String.valueOf(prixHT));

            prix_ttc_facture = (TextView) dialog_reservation.findViewById(R.id.prix_ttc_facture);
            prix_ttc_facture.setText(String.valueOf(prixTotalArondissement));

            appliquer_code_promo = (Button) dialog_reservation.findViewById(R.id.button_appliquer_code_promo);
            reservation_final = (Button) dialog_reservation.findViewById(R.id.reservervation_final);
            final double finalPrixTotal = prixTotal;

        reservation_final.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {

                    //ApiAjouterFactureFetcher apiFacture = new ApiAjouterFactureFetcher(context,finalPrixTotal);
                    ApiAjouterContratFetcher apiContrat = new ApiAjouterContratFetcher(context);

                    Intent intent = new Intent(context, BottomNavigationBar.class);
                    intent.putExtra("Demande", "true");
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
