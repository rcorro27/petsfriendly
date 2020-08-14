package com.example.petsitterisi;
import android.app.DatePickerDialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.text.InputType;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Switch;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.petsitterisi.services.ApiRechercheFetcher;
import com.google.android.material.switchmaterial.SwitchMaterial;

import java.io.InputStream;
import java.util.Calendar;

public class RechercheFragment extends Fragment {

    DatePickerDialog picker;
    EditText eText;
    EditText eText_2;
    EditText lieu;
    SwitchMaterial garde_chez_petsitte;
    SwitchMaterial garde_chez_vous;
    SwitchMaterial promenade;
    SwitchMaterial chien;
    SwitchMaterial chat;
    public static EditText test_reponse;
    Context ctx;
    Button boutton_rechercher;
    int moisDebut;
    int jourDebut;
    int anneeDebut;

    int moisFin;
    int jourFin;
    int anneeFin;

    boolean garde_chez_petsitteSate = false;
    boolean garde_chez_vousSate = false;
    boolean promenadeState = false;
    boolean chienState = false;
    boolean chatState = false;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        final View monFragmentRecherche = inflater.inflate(R.layout.fragment_recherche, container, false);
        ctx = monFragmentRecherche.getContext();
        eText = (EditText) monFragmentRecherche.findViewById(R.id.editText1);
        garde_chez_petsitte = monFragmentRecherche.findViewById(R.id.garde_chez_petsitter);
        garde_chez_vous = monFragmentRecherche.findViewById(R.id.garde_chez_vous);
        promenade = monFragmentRecherche.findViewById(R.id.promenade);
        chien = monFragmentRecherche.findViewById(R.id.chien);
        chat = monFragmentRecherche.findViewById(R.id.chat);
        lieu = monFragmentRecherche.findViewById(R.id.lieu);
        eText.setInputType(InputType.TYPE_NULL);
        eText.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Calendar cldr = Calendar.getInstance();
                int day = cldr.get(Calendar.DAY_OF_MONTH);
                int month = cldr.get(Calendar.MONTH);
                int year = cldr.get(Calendar.YEAR);
                // date picker dialog
                picker = new DatePickerDialog(ctx, R.style.datePickerTheme,
                        new DatePickerDialog.OnDateSetListener() {
                            @Override
                            public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                                moisDebut = monthOfYear;
                                jourDebut = dayOfMonth;
                                anneeDebut = year;
                                eText.setText(dayOfMonth + "/" + (monthOfYear + 1) + "/" + year);
                            }
                        }, year, month, day);
                picker.show();
            }
        });


        eText_2 = (EditText) monFragmentRecherche.findViewById(R.id.editText2);
        eText_2.setInputType(InputType.TYPE_NULL);
        eText_2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Calendar cldr = Calendar.getInstance();
                int day = cldr.get(Calendar.DAY_OF_MONTH);
                int month = cldr.get(Calendar.MONTH);
                int year = cldr.get(Calendar.YEAR);
                // date picker dialog
                picker = new DatePickerDialog(ctx, R.style.datePickerTheme,
                        new DatePickerDialog.OnDateSetListener() {
                            @Override
                            public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                                moisFin = monthOfYear;
                                jourFin = dayOfMonth;
                                anneeFin = year;
                                eText_2.setText(dayOfMonth + "/" + (monthOfYear + 1) + "/" + year);
                            }
                        }, year, month, day);
                picker.show();


            }
        });

        garde_chez_petsitte.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                garde_chez_petsitteSate = isChecked;
            }
        });

        garde_chez_vous.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                garde_chez_vousSate = isChecked;
            }
        });

        promenade.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                promenadeState = isChecked;
            }
        });

        chien.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                chienState = isChecked;
            }
        });

        chat.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                chatState = isChecked;
            }
        });

        boutton_rechercher = monFragmentRecherche.findViewById(R.id.btn_rechercher);

        boutton_rechercher.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

             //   if(garde_chez_petsitteSate != garde_chez_vousSate){

            //        if(garde_chez_petsitteSate )

         //       }else{

          //      }




            }
        });




    return monFragmentRecherche;
    }

}


