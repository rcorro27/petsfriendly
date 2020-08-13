package com.example.petsitterisi;
import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.google.android.material.button.MaterialButton;
import com.google.android.material.dialog.MaterialAlertDialogBuilder;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class CardPetSitter extends Activity {
    Context ctx;
    //MaterialButton bouton_reservation;
    FloatingActionButton bouton_reservation ;
    Dialog dialog_reservation;
    //MaterialAlertDialogBuilder material_dialog_reservation;
//    TextView prix_ht_facture;
//    TextView taxe_tps;
//    TextView taxe_tvq;
//    TextView prix_ttc_facture;
//    Button appliquer_code_promo;
//    Button reservation_final;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        ctx = this;

        super.onCreate(savedInstanceState);
        setContentView(R.layout.card_pet_sitter);
        dialog_reservation = new Dialog(ctx);
        //material_dialog_reservation = new MaterialAlertDialogBuilder(ctx);

        bouton_reservation = (FloatingActionButton) findViewById(R.id.reservervation_liste_pet_sitter);

        bouton_reservation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                afficherAlertDialogReservation();
            }
        });


    }

    private void afficherAlertDialogReservation() {

        //material_dialog_reservation.setView(R.layout.activity_alert_dialog_reservation);

        dialog_reservation.setContentView(R.layout.activity_alert_dialog_reservation);

//         prix_ht_facture = (TextView) dialog_reservation.findViewById(R.id.prix_ht_facture);
//         taxe_tps = (TextView) dialog_reservation.findViewById(R.id.taxe_tps);
//         taxe_tvq = (TextView) dialog_reservation.findViewById(R.id.taxe_tvq);
//         prix_ttc_facture = (TextView) dialog_reservation.findViewById(R.id.prix_ttc_facture);
//         appliquer_code_promo = (Button) dialog_reservation.findViewById(R.id.button_appliquer_code_promo);
//         reservation_final = (Button) dialog_reservation.findViewById(R.id.reservervation_final);



    }
}
