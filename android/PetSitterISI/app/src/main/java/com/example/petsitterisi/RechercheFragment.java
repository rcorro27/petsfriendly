package com.example.petsitterisi;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Switch;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
public class RechercheFragment extends Fragment {

    private Button suivant;
    private Switch switch_service_garder_chez_sitter;
    private Switch switch_service_garder_chez_proprietaire;
    private Switch switch_service_veterinaire;
    private Switch switch_service_promenade;
    private Switch switch_service_toilettage_chat;
    private Switch switch_service_toilettage_chien;
    private Switch switch_service_baignade;
    private Switch switch_service_dressage;
    private Switch switch_service_nourrir;
    private Switch switch_service_nuit;


    public static final String SHARED_PREFS_SERVICES = "shared_preferences_recherche_service";
    public static final String SWITCH_SERVICES_CHEZ_SITTER = "services_chez_sitter";
    public static final String SWITCH_SERVICES_PROPRIETAIRE = "services_chez_propietaire";
    public static final String SWITCH_SERVICES_VETERINAIRE = "services_veterinaire";
    public static final String SWITCH_SERVICES_PROMENADE = "services_promenade";
    public static final String SWITCH_SERVICES_TOILETTAGE_CHAT = "services_toilettage_chat";
    public static final String SWITCH_SERVICES_TOILETTAGE_CHIEN = "services_toilettage_chien";
    public static final String SWITCH_SERVICES_BEIGNADE = "services_beignade";
    public static final String SWITCH_SERVICES_DRESSAGE = "services_dressage";
    public static final String SWITCH_SERVICES_NOURRIR = "services_nourrir";
    public static final String SWITCH_SERVICES_DE_NUIT = "services_garde_de_nuit";


    private boolean switchOnOff;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
      return inflater.inflate(R.layout.fragment_recherche, container, false);



        suivant = (Button) suivant.findViewById(R.id.btn_suivant);
        switch_service_garder_chez_sitter = (Switch) switch_service_garder_chez_sitter.findViewById(R.id.service_garder_chez_sitter);
        switch_service_garder_chez_proprietaire = (Switch) switch_service_garder_chez_proprietaire.findViewById(R.id.service_garder_chez_proprietaire);
        switch_service_veterinaire = (Switch) switch_service_veterinaire.findViewById(R.id.service_veterinaire);
        switch_service_promenade = (Switch) switch_service_promenade.findViewById(R.id.service_promenade);
        switch_service_toilettage_chat = (Switch) switch_service_toilettage_chat.findViewById(R.id.service_toilettage_chat);
        switch_service_toilettage_chien = (Switch) switch_service_toilettage_chien.findViewById(R.id.service_toilettage_chien);
        switch_service_baignade = (Switch) switch_service_baignade.findViewById(R.id.service_baignade);
        switch_service_dressage = (Switch) switch_service_dressage.findViewById(R.id.service_dressage);
        switch_service_nourrir = (Switch) switch_service_nourrir.findViewById(R.id.switch_service_nourrir);
        switch_service_nuit = (Switch) switch_service_nuit.findViewById(R.id.service_nuit);

        suivant.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                saveData();
            }
        });

        //recharger les donnes
        loadData();

        updateViews();

    }

    public void saveData() {

        //pour acceder a l'instance de SharedPreferences appeler la méthode getPreferences()
        SharedPreferences sharedPreferences = getSharedPreferences(SHARED_PREFS_SERVICES, MODE_PRIVATE;

        //Pour modifier les informations stockées dans les SharedPreferences
        SharedPreferences.Editor editor = sharedPreferences.edit();

        editor.putBoolean(SWITCH_SERVICES_CHEZ_SITTER, switch_service_garder_chez_sitter.isChecked());
        editor.putBoolean(SWITCH_SERVICES_PROPRIETAIRE, switch_service_garder_chez_proprietaire.isChecked());
        editor.putBoolean(SWITCH_SERVICES_VETERINAIRE, switch_service_veterinaire.isChecked());
        editor.putBoolean(SWITCH_SERVICES_PROMENADE, switch_service_promenade.isChecked());
        editor.putBoolean(SWITCH_SERVICES_TOILETTAGE_CHAT, switch_service_toilettage_chat.isChecked());
        editor.putBoolean(SWITCH_SERVICES_TOILETTAGE_CHIEN, switch_service_toilettage_chien.isChecked());
        editor.putBoolean(SWITCH_SERVICES_BEIGNADE, switch_service_baignade.isChecked());
        editor.putBoolean(SWITCH_SERVICES_DRESSAGE, switch_service_dressage.isChecked());
        editor.putBoolean(SWITCH_SERVICES_NOURRIR, switch_service_nourrir.isChecked());
        editor.putBoolean(SWITCH_SERVICES_DE_NUIT, switch_service_nuit.isChecked());



        editor.apply();

        Toast.makeText(this, "Data saved", Toast.LENGTH_SHORT).show();


    }

    public void loadData() {
        SharedPreferences sharedPreferences = getSharedPreferences(SHARED_PREFS_SERVICES, MODE_PRIVATE);

        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_CHEZ_SITTER, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_PROPRIETAIRE, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_VETERINAIRE, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_PROMENADE, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_TOILETTAGE_CHAT, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_TOILETTAGE_CHIEN, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_BEIGNADE, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_DRESSAGE, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_NOURRIR, false);
        switchOnOff = sharedPreferences.getBoolean(SWITCH_SERVICES_DE_NUIT, false);
    }


    public void updateViews() {
        switch_service_garder_chez_sitter.setChecked(switchOnOff);
        switch_service_garder_chez_proprietaire.setChecked(switchOnOff);
        switch_service_veterinaire.setChecked(switchOnOff);
        switch_service_promenade.setChecked(switchOnOff);
        switch_service_toilettage_chat.setChecked(switchOnOff);
        switch_service_toilettage_chien.setChecked(switchOnOff);
        switch_service_baignade.setChecked(switchOnOff);
        switch_service_dressage.setChecked(switchOnOff);
        switch_service_nourrir.setChecked(switchOnOff);
        switch_service_nuit.setChecked(switchOnOff);
    }





}
