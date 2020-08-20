package com.example.petsitterisi;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.petsitterisi.managers.UtilisateurManager;
import com.example.petsitterisi.services.ApiListChatFetcher;
import com.example.petsitterisi.services.ApiListReservationFetcher;
public class ChatFragment extends Fragment {

    Context ctx;
    LinearLayout chat_liste_container;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View listeChatView = inflater.inflate(R.layout.fragment_chat, container, false);

        ctx = listeChatView.getContext();

        chat_liste_container = listeChatView.findViewById(R.id.liste_chat_container);
//
//        int utilisateurId = UtilisateurManager.getIdUtilisateur(ctx);
//        try {
//            ApiListChatFetcher apiListChatFetcher = new ApiListChatFetcher(ctx, chat_liste_container);
//            apiListChatFetcher.execute("https://pets-friendly.herokuapp.com/" + utilisateurId);
//        }catch (Exception e)
//        {
//            e.printStackTrace();
//        }

        return listeChatView;

    }
}
