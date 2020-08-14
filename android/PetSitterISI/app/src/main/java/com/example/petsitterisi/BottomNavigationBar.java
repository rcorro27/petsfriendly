package com.example.petsitterisi;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Toast;

import com.example.petsitterisi.managers.ConnexionManager;
import com.google.android.material.bottomnavigation.BottomNavigationView;
public class BottomNavigationBar extends FragmentActivity {
        BottomNavigationView bottomNav;

        Intent intent;
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
        String valeurNavigation =  "false";
        Intent intentValeur = getIntent();
        String extraValue = intentValeur.getStringExtra("list_pet_sitter");
        if(extraValue != null){
            valeurNavigation = extraValue;
        }

        super.onCreate(savedInstanceState);
        //cacher temporairement  la bare d'etat du haut
        requestWindowFeature(Window.FEATURE_NO_TITLE); getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_bottom_navigation_bar);
        bottomNav = findViewById(R.id.bottom_navigation);
        bottomNav.setOnNavigationItemSelectedListener(navListener);

        //prendre le fragment selectionner quand le tel est en rotation
        if(valeurNavigation.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new ListePetSitter()).commit();
        }else {

            if (savedInstanceState == null) {
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                        new RechercheFragment()).commit();
            }
        }

    }

    private BottomNavigationView.OnNavigationItemSelectedListener navListener =
            new BottomNavigationView.OnNavigationItemSelectedListener() {
                @Override
                public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                    Fragment selectedFragment = new Fragment();
                    switch (item.getItemId()) {
                        case R.id.nav_chat:
                            selectedFragment = new ChatFragment();
                            break;
                        case R.id.nav_rechercher:
                            selectedFragment = new RechercheFragment();
                            break;
                        case R.id.nav_demandes:
                            selectedFragment = new DemandesFragment();
                            break;
                        case R.id.nav_favoris:
                            selectedFragment = new FavorisFragment();
                            break;
                        case R.id.nav_profil:
                            selectedFragment = new ProfilFragment();
                            break;
                    }
                    assert selectedFragment != null;
                    getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                            selectedFragment).commit();
                    return true;
                }

            };




}