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

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        ctx = this;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_liste_pet_sitter);
        ll = findViewById(R.id.card_container);

        ApiListPetSitterFetcher apiListPetsitter = new ApiListPetSitterFetcher(ctx, ll);

        apiListPetsitter.execute();

    }



}
