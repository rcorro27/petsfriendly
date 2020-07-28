package com.example.petsitterisi;

import androidx.appcompat.app.AppCompatActivity;

<<<<<<< HEAD
import android.os.Bundle;

public class Connexion extends AppCompatActivity {

=======
import android.content.Context;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

public class Connexion extends AppCompatActivity {

    TextView top_textView;
    Button connexion_button;
    Context ctx;

>>>>>>> mobile_android
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connexion);
<<<<<<< HEAD
=======

        top_textView = findViewById(R.id.top_textView);
        connexion_button = findViewById(R.id.connexion_button);
        top_textView.setBackground(getResources().getDrawable(R.drawable.rounded_corner));
        connexion_button.setBackgroundColor(getResources().getColor(R.color.black));
        connexion_button.setTextColor(getResources().getColor(R.color.white));
>>>>>>> mobile_android
    }
}