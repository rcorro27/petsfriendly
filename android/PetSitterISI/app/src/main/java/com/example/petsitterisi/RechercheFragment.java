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
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Switch;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.petsitterisi.services.ApiRechercheFetcher;

import java.io.InputStream;
import java.util.Calendar;

public class RechercheFragment extends Fragment {

    DatePickerDialog picker;
    EditText eText;
    EditText eText_2;
    public static EditText test_reponse;
    Context ctx;
    Button boutton_rechercher;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        final View monFragmentRecherche = inflater.inflate(R.layout.fragment_recherche, container, false);
        ctx = monFragmentRecherche.getContext();
        test_reponse= (EditText) monFragmentRecherche.findViewById(R.id.test_reponse_recherche);
        eText = (EditText) monFragmentRecherche.findViewById(R.id.editText1);
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
                                eText_2.setText(dayOfMonth + "/" + (monthOfYear + 1) + "/" + year);
                            }
                        }, year, month, day);
                picker.show();


            }
        });

//        public void getJson (){
//
//            String json:
//            try {
//                InputStream is = getAssets();
//
//            } catch (Exception e) {
//
//                e.printStackTrace();
//            }
//        }

        boutton_rechercher = monFragmentRecherche.findViewById(R.id.btn_rechercher);

        boutton_rechercher.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                Intent intent = new Intent(ctx, CardPetSitter.class);
//                startActivity(intent);

                ApiRechercheFetcher test_recuperation_reponse = new ApiRechercheFetcher();
                test_recuperation_reponse.execute();


            }
        });




    return monFragmentRecherche;
    }

}


