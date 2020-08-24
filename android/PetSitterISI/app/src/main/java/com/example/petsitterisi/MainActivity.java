package com.example.petsitterisi;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.res.AssetManager;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.MediaController;
import android.widget.TextView;
import android.widget.VideoView;

import com.example.petsitterisi.managers.UtilisateurManager;
import com.example.petsitterisi.services.ConnexionBd;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import java.io.InputStream;


public class MainActivity extends Activity {


    TextView top_textView;
    Button connexion_button;
    Context ctx;
    //cacher temporairement la navigation bar android par defaut
    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    protected void onStart() {
        super.onStart();
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        |View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY); // cacher temporairement avec transparence
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        ctx = this;
        super.onCreate(savedInstanceState);
        //cacher temporairement  la bare d'etat du haut
        requestWindowFeature(Window.FEATURE_NO_TITLE); getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_bottom_navigation_bar);

        ConnexionBd.copyBdFromAssets(this);

        int idUtilisateur = UtilisateurManager.getIdUtilisateur(ctx);


        if(idUtilisateur > 0){
            //Utilisateur s'est deja loger tanto

            try {
                Intent intent = new Intent(ctx, BottomNavigationBar.class);
                startActivity(intent);
            }catch(Exception e){
                e.printStackTrace();
            }


        }else {
            //C'est la premiere fois qu;il ouvre l'application

            setContentView(R.layout.activity_main);
            ConnexionBd.copyBdFromAssets(this);
            top_textView = findViewById(R.id.top_textView);
            connexion_button = findViewById(R.id.connexion_button);
            connexion_button.setBackgroundColor(getResources().getColor(R.color.black));
            connexion_button.setTextColor(getResources().getColor(R.color.white));
            VideoView videoView =(VideoView)findViewById(R.id.videoView1);
            MediaController mediaController = new MediaController(this);
            mediaController.setAnchorView(videoView);
            String path = "android.resource://" + getPackageName() + "/" + R.raw.video_accueil;
            videoView.setMediaController(mediaController);
            videoView.setVideoPath(path);
            videoView.requestFocus();
            mediaController.setVisibility(View.GONE);
            videoView.setMediaController(mediaController);
            videoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mp) {
                    mp.setVolume(0f, 0f);
                    mp.setLooping(true);
                }
            });
            videoView.start();


            //ouvrir l'activite connexion

            connexion_button.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent intent = new Intent(ctx, Connexion.class);
                    startActivity(intent);
                }
            });

        }






    }





    }

