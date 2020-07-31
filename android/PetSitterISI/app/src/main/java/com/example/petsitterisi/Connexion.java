package com.example.petsitterisi;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petsitterisi.Manager.ConnexionManager;

public class Connexion extends AppCompatActivity {

    TextView top_textView;
    Button connexion_button;
    Context ctx;
    TextView e_mail;
    TextView mot_de_passe;
    BottomNavigationBar bottomNavigationBar = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connexion);

        ctx = this;
        top_textView = findViewById(R.id.top_textView);
        connexion_button = findViewById(R.id.connexion_button);
        top_textView.setBackground(getResources().getDrawable(R.drawable.rounded_corner));
        connexion_button.setBackgroundColor(getResources().getColor(R.color.black));
        connexion_button.setTextColor(getResources().getColor(R.color.white));
        e_mail = findViewById(R.id.e_mail);
        mot_de_passe = findViewById(R.id.mot_de_passe);

        connexion_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               Intent intent = new Intent(ctx, BottomNavigationBar.class);
               startActivity(intent);


            }
        });










    }
}