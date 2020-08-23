package com.example.petsitterisi;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.text.Editable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.example.petsitterisi.managers.UtilisateurManager;
import com.example.petsitterisi.services.ApiListChatDiscussionFetcher;
import com.example.petsitterisi.services.ApiListChatFetcher;
import com.example.petsitterisi.services.ApiListReservationFetcher;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;
public class MessageList extends Fragment {
    Context ctx;
    LinearLayout chat_message_container;

     Button icone_retour;
    Button btn_envoyer_discussion;

    //TextInputEditText text_message_discussion;
    EditText text_message_discussion;
    Editable textMsgEnvoyer ;

    // creer 2 variable int chiffre puis incrementer les variable et se servir de celle du message envoyer comme depart pour afficher le message recus

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View chatMessages =  inflater.inflate(R.layout.activity_message_list, container, false);
        ctx = chatMessages.getContext();

        TextView nomInterlocuteur = chatMessages.findViewById(R.id.nom_utilsateur_message_recus);
        String non_chat_header = UtilisateurManager.getNomChat(ctx);
        nomInterlocuteur.setText(non_chat_header);



        chat_message_container = chatMessages.findViewById(R.id.container_message_list);

        text_message_discussion = chatMessages.findViewById(R.id.edittext_chatbox);
        btn_envoyer_discussion  = (Button) chatMessages.findViewById(R.id.button_chatbox_send);


        btn_envoyer_discussion.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                // simulation message pour presentation
                final View cardMessageEnvoyer = View.inflate(ctx , R.layout.activity_item_message_envoyer,null);
                final TextView messageEnvoyer = cardMessageEnvoyer.findViewById(R.id.text_message_body_envoyer);
                textMsgEnvoyer = text_message_discussion.getText();
                messageEnvoyer.setText(textMsgEnvoyer);

                if(!text_message_discussion.getText().toString().equals("")){
                    chat_message_container.addView(cardMessageEnvoyer);

                }





// // avec sharedPreference
//                UtilisateurManager.addMessageInsideDiscussion(ctx, "message_discussion", textMsgEnvoyer);
//              String messageEnvoyerDepuisInsideDiscussion = UtilisateurManager.getMessageInsideDiscussion(ctx);
//
//                if (!messageEnvoyerDepuisInsideDiscussion.equals(""))
//                {
//
//
//
//                    chat_message_container.removeView(cardMessageEnvoyer);
//                    messageEnvoyer.setText(messageEnvoyerDepuisInsideDiscussion);
//                    chat_message_container.addView(cardMessageEnvoyer);
//
//                }
                //chat_message_container.removeView(cardMessageEnvoyer);

                textMsgEnvoyer.clear();
            }

        });

        //chat_message_container.addView(cardMessageEnvoyer);

        icone_retour = chatMessages.findViewById(R.id.icone_retour);

        icone_retour.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ctx, BottomNavigationBar.class);
                intent.putExtra("Chat", "true");
                ctx.startActivity(intent);
            }
        });





        int utilisateurId = UtilisateurManager.getIdUtilisateur(ctx);
        try {
            ApiListChatDiscussionFetcher apiListChatFetcher = new ApiListChatDiscussionFetcher(ctx, chatMessages);
            apiListChatFetcher.execute("https://pets-friendly.herokuapp.com/" + utilisateurId);
        }catch (Exception e)
        {
            e.printStackTrace();
        }

        return chatMessages;

    }

}