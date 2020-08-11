package com.example.petsitterisi;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Context;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

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

    @Override
    protected void onCreate(Bundle savedInstanceState) {

ctx = this;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_liste_pet_sitter);
        ll = findViewById(R.id.card_container);


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
                         petSitterName.setText(jsObject.getString("nom"));
                         llParam.addView(cardPetSitterParam);


                     }

                 }

            }






        } catch (IOException | JSONException e) {
            // Handle exceptions here

        }
    }







}
