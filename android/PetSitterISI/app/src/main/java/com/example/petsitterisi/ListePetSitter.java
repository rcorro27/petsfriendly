package com.example.petsitterisi;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petsitterisi.services.ApiListPetSitterFetcher;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Array;
import java.util.Iterator;
import java.util.Set;
public class ListePetSitter extends Activity {

    Context ctx;
    LinearLayout ll;
    Button  reservervation_liste_pet_sitter;
    Dialog dialog_reservation;
    TextView prix_ht_facture;
    TextView taxe_tps;
    TextView taxe_tvq;
    TextView prix_ttc_facture;
    Button appliquer_code_promo;
    Button reservation_final;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        ctx = this;
        dialog_reservation = new Dialog(ctx);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_liste_pet_sitter);
        ll = findViewById(R.id.card_container);

        ApiListPetSitterFetcher apiListPetsitter = new ApiListPetSitterFetcher(ctx, ll);

<<<<<<< HEAD
getJson(ll);
    }




    public void getJson (LinearLayout llParam) {
        String tContents = "";
        String concat = "";
        try {
            InputStream stream = getAssets().open("resultat-recherche.json");
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

                         View cardPetSitterParam = View.inflate(ctx , R.layout.card_pet_sitter,null);
                         TextView petSitterName = cardPetSitterParam.findViewById(R.id.name);


                         reservervation_liste_pet_sitter = cardPetSitterParam.findViewById(R.id.reservervation_liste_pet_sitter);

                         reservervation_liste_pet_sitter.setOnClickListener(new View.OnClickListener() {
                             @Override
                             public void onClick(View v) {
                                 afficherAlertDialogReservation();
                             }
                         });


                         petSitterName.setText(jsObject.getString("nom"));
                         llParam.addView(cardPetSitterParam);


                     }
=======
        apiListPetsitter.execute();
>>>>>>> mobile_android

    }

    private void afficherAlertDialogReservation() {

        //material_dialog_reservation.setView(R.layout.activity_alert_dialog_reservation);

        dialog_reservation.setContentView(R.layout.activity_alert_dialog_reservation);

        prix_ht_facture = (TextView) dialog_reservation.findViewById(R.id.prix_ht_facture);
        taxe_tps = (TextView) dialog_reservation.findViewById(R.id.taxe_tps);
        taxe_tvq = (TextView) dialog_reservation.findViewById(R.id.taxe_tvq);
        prix_ttc_facture = (TextView) dialog_reservation.findViewById(R.id.prix_ttc_facture);
        appliquer_code_promo = (Button) dialog_reservation.findViewById(R.id.button_appliquer_code_promo);
        reservation_final = (Button) dialog_reservation.findViewById(R.id.reservervation_final);

        dialog_reservation.show();

    }



}
