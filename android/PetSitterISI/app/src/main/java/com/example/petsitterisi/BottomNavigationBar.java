package com.example.petsitterisi;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.example.petsitterisi.managers.UtilisateurManager;
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
        String valeurNavigationFiltre =  "false";
        String valeurNavigationProfilSitter =  "false";
        String valeurNavigationChat =  "false";
        String valeurNavigationDemande =  "false";
        String valeurNavigationFeedBack =  "false";
        String valeurNavigationChatDiscussion =  "false";

        Intent intentValeur = getIntent();
        String extraValue = intentValeur.getStringExtra("list_pet_sitter");
        if(extraValue != null){
            valeurNavigation = extraValue;
        }

        String extraValue2 = intentValeur.getStringExtra("Filtres");
        if(extraValue2 != null){
            valeurNavigationFiltre = extraValue2;
        }

        String extraValue3 = intentValeur.getStringExtra("Profil");
        if(extraValue3 != null){
            valeurNavigationProfilSitter = extraValue3;
        }

        String extraValue4 = intentValeur.getStringExtra("Chat");
        if(extraValue4 != null){
            valeurNavigationChat = extraValue4;
        }

        String extraValue5 = intentValeur.getStringExtra("Demande");
        if(extraValue5 != null){
            valeurNavigationDemande = extraValue5;
        }

        String extraValue6 = intentValeur.getStringExtra("FeedBack");
        if(extraValue6 != null){
            valeurNavigationFeedBack = extraValue6;
        }

        String extraValue7 = intentValeur.getStringExtra("ChatDiscussion");
        if(extraValue7 != null){
            valeurNavigationChatDiscussion = extraValue7;
        }


        super.onCreate(savedInstanceState);
        //cacher temporairement  la bare d'etat du haut
        requestWindowFeature(Window.FEATURE_NO_TITLE); getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_bottom_navigation_bar);
        bottomNav = findViewById(R.id.bottom_navigation);
        bottomNav.setOnNavigationItemSelectedListener(navListener);

        if(valeurNavigation.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new ListePetSitter()).commit();


        }
        else if (valeurNavigationFiltre.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new Filtres()).commit();
        }
        else if (valeurNavigationProfilSitter.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new ProfilPetSitter()).commit();
        }
        else if (valeurNavigationChat.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                   new ChatFragment()).commit();
        }
        else if (valeurNavigationDemande.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new ReservationFragment()).commit();
        }
        else if (valeurNavigationFeedBack.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new RechercheFragment()).commit();
        }
        else if (valeurNavigationChatDiscussion.equals("true")){

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new MessageList()).commit();
        }
        else {

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

                            int id_role = UtilisateurManager.getIdUtilisateurRole(ctx);

                            if(id_role == 2){
                                selectedFragment = new ReservationFragment();
                            }else if(id_role == 3){
                                selectedFragment = new PlaningsFragment();
                            }

                           selectedFragment = new ReservationFragment();

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