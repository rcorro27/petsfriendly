package com.example.petsitterisi;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.example.petsitterisi.managers.UtilisateurManager;
import com.example.petsitterisi.services.ApiListChatDiscussionFetcher;
import com.example.petsitterisi.services.ApiListChatFetcher;
import com.example.petsitterisi.services.ApiListReservationFetcher;
public class MessageList extends Fragment {
    Context ctx;
    RecyclerView chat_message_container;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View chatMessages = inflater.inflate(R.layout.activity_message_list, container, false);

        ctx = chatMessages.getContext();

        chat_message_container = chatMessages.findViewById(R.id.recyclerview_message_list);

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