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
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;

import com.example.petsitterisi.managers.UtilisateurManager;
import com.example.petsitterisi.services.ApiListChatDiscussionFetcher;
import com.example.petsitterisi.services.ApiListChatFetcher;
import com.example.petsitterisi.services.ApiListReservationFetcher;


import java.util.List;
public class MessageList extends Fragment {
    Context ctx;
    LinearLayout chat_message_container;
//    LinearLayout icone_retour;


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View chatMessages = inflater.inflate(R.layout.activity_message_list, container, false);

        ctx = chatMessages.getContext();

//        icone_retour = icone_retour.findViewById(R.id.ll_icone_retour);
//
//        icone_retour.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                Intent intent = new Intent(ctx, BottomNavigationBar.class);
//                intent.putExtra("Chat", "true");
//                ctx.startActivity(intent);
//            }
//        });

        chat_message_container = chatMessages.findViewById(R.id.container_message_list);



        int utilisateurId = UtilisateurManager.getIdUtilisateur(ctx);
        try {
            ApiListChatDiscussionFetcher apiListChatFetcher = new ApiListChatDiscussionFetcher(ctx, chat_message_container);
            apiListChatFetcher.execute("https://pets-friendly.herokuapp.com/" + utilisateurId);
        }catch (Exception e)
        {
            e.printStackTrace();
        }

        return chatMessages;

    }

}