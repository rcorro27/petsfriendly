package com.example.petsitterisi;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.Editable;
import android.text.Spannable;
import android.text.SpannableStringBuilder;
import android.text.style.ImageSpan;
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

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
public class MessageList extends Fragment {
    Context ctx;
    LinearLayout chat_message_container;

     Button icone_retour;
    Button btn_envoyer_discussion;

    //TextInputEditText text_message_discussion;
    EditText text_message_discussion;
    Editable textMsgEnvoyer ;
    Editable textMsgRecus ;
    // Define the pic id
    private static final int pic_id = 123;
    Button ajouter_image;
    ImageView image_recuperer ;
    ImageView img_recuper;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View chatMessages =  inflater.inflate(R.layout.activity_message_list, container, false);
       // final View view_photos_envoyer =  inflater.inflate(R.layout.photo_envoyer, container, false);

        ctx = chatMessages.getContext();

        TextView nomInterlocuteur = chatMessages.findViewById(R.id.nom_utilsateur_message_recus);
        final String non_chat_header = UtilisateurManager.getNomChat(ctx);
        nomInterlocuteur.setText(non_chat_header);


        icone_retour = chatMessages.findViewById(R.id.icone_retour);
        icone_retour.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ctx, BottomNavigationBar.class);
                intent.putExtra("Chat", "true");
                ctx.startActivity(intent);
            }
        });


        ImageView UrlPhotoUtilisateurRecus = chatMessages.findViewById(R.id.image_message_profile_header);

        if(non_chat_header.equals("Michel"))
        {
            UrlPhotoUtilisateurRecus.setImageResource(R.drawable.michel);
        }
        else
        {
            UrlPhotoUtilisateurRecus.setImageResource(R.drawable.kamel);
        }


        chat_message_container = chatMessages.findViewById(R.id.container_message_list);
        btn_envoyer_discussion  = (Button) chatMessages.findViewById(R.id.button_chatbox_send);
        text_message_discussion = chatMessages.findViewById(R.id.edittext_chatbox);

        ajouter_image = chatMessages.findViewById(R.id.icone_ajoute_photo_conversation);
//        image_recuperer = (ImageView) new ImageView(ctx);

//        final MediaPlayer son_photo_envoyer = MediaPlayer.create(ctx, R.raw.son_message_envoye);
//        ajouter_image.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//
//                Intent camera_intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
//                final View view_photos_envoyer = View.inflate(ctx, R.layout.photo_envoyer, null);
//                image_recuperer = view_photos_envoyer.findViewById(R.id.img_recup);
//                son_photo_envoyer.start();
//                chat_message_container.addView(view_photos_envoyer);
//
//                startActivityForResult(camera_intent, pic_id);
//
//
//
//            }
//        });
//


        final String[] tourMessageEnvoyer = {"true"};

        // sharePreferenced pour message contacter sitter
        if(tourMessageEnvoyer[0].equals("true"))
        {
            final View cardMessageEnvoyerParam = View.inflate(ctx, R.layout.activity_item_message_envoyer, null);

            final TextView messageItemEnvoyer = (TextView) cardMessageEnvoyerParam.findViewById(R.id.text_message_body_envoyer);
            TextView heureMessageEnvoyer = cardMessageEnvoyerParam.findViewById(R.id.text_message_time_envoyer);
            String messageEnvoyerDepuisContacterInsideProfilSitter = UtilisateurManager.getMessageContacterInsideDiscussion(ctx);
            String heureMsgEnvoyerContacter = UtilisateurManager.getHeureMessageEnvoyer(ctx);
            messageItemEnvoyer.setText(messageEnvoyerDepuisContacterInsideProfilSitter);

            // date with real date system now
            heureMessageEnvoyer.setText(heureMsgEnvoyerContacter);



            if (!messageEnvoyerDepuisContacterInsideProfilSitter.equals("")) {

                chat_message_container.addView(cardMessageEnvoyerParam);
                tourMessageEnvoyer[0] = "false";
            }
        }

        final MediaPlayer son_message_envoyer = MediaPlayer.create(ctx, R.raw.son_message_envoye);
        final MediaPlayer son_message_recu = MediaPlayer.create(ctx, R.raw.son_message_recu);





        btn_envoyer_discussion.setOnClickListener(new View.OnClickListener() {
            @RequiresApi(api = Build.VERSION_CODES.O)
            @Override
            public void onClick(View v) {


                if(!tourMessageEnvoyer[0].equals("false")) // simulation message envoyer pour presentation
                {
                    // photo
                    final MediaPlayer son_photo_envoyer = MediaPlayer.create(ctx, R.raw.son_message_envoye);
                    ajouter_image.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {

                            Intent camera_intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                            final View view_photos_envoyer = View.inflate(ctx, R.layout.photo_envoyer, null);
                            image_recuperer = view_photos_envoyer.findViewById(R.id.img_recup);
                            son_photo_envoyer.start();
                            chat_message_container.addView(view_photos_envoyer);

                            startActivityForResult(camera_intent, pic_id);

                        }
                    });


                    final View cardMessageEnvoyer = View.inflate(ctx , R.layout.activity_item_message_envoyer,null);
                    final TextView messageEnvoyer = cardMessageEnvoyer.findViewById(R.id.text_message_body_envoyer);
                    //String date = "2020-08-11T00:05:00.000Z";
                   // SimpleDateFormat dateMsgEnvoyer = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.getDefault());
                    String heureNowMsgEnvoyer = new SimpleDateFormat("HH:mm", Locale.getDefault()).format(new Date());
                    TextView heureMessageEnvoyer = cardMessageEnvoyer.findViewById(R.id.text_message_time_envoyer);
                    textMsgEnvoyer = text_message_discussion.getText();


                    // avec sharedPreferences
                    UtilisateurManager.addMessageInsideDiscussion(ctx, "message_discussion", textMsgEnvoyer);
                    String messageEnvoyerDepuisInsideDiscussion = UtilisateurManager.getMessageInsideDiscussion(ctx);
                    messageEnvoyer.setText(messageEnvoyerDepuisInsideDiscussion);





                    ////////////////////////////////////////////////////////////////






                    // date hardcoder
//                    date = DateConvertisseur(date);
//                    heureMessageEnvoyer.setText(date);

                    // date with real date system now
                    heureMessageEnvoyer.setText(heureNowMsgEnvoyer);

                    // sharedPreference pour l'heure
                    UtilisateurManager.addHeureMessageEnvoyer(ctx, "heure_Msg", heureNowMsgEnvoyer);

                    //en local
                   // messageEnvoyer.setText(textMsgEnvoyer);








                    if(!text_message_discussion.getText().toString().equals("")){
                        tourMessageEnvoyer[0] = "false";
                        chat_message_container.addView(cardMessageEnvoyer);


                        son_message_envoyer.start();




                    }

                    textMsgEnvoyer.clear();

                }
                else {// simulation message recus pour presentation



                    // photo
                    final MediaPlayer son_photo_envoyer = MediaPlayer.create(ctx, R.raw.son_message_envoye);
                    ajouter_image.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {

                            Intent camera_intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                            final View view_photos_envoyer = View.inflate(ctx, R.layout.photo_envoyer, null);
                            image_recuperer = view_photos_envoyer.findViewById(R.id.img_recup);

                            chat_message_container.addView(view_photos_envoyer);

                            startActivityForResult(camera_intent, pic_id);



                        }
                    });



                    final View cardMessageRecus = View.inflate(ctx , R.layout.activity_item_message_recus,null);
                    final TextView messageRecus = cardMessageRecus.findViewById(R.id.text_message_body_recu);
                    //String date = "2020-08-11T00:05:00.000Z";
                    String heureNowMsgReus = new SimpleDateFormat("HH:mm", Locale.getDefault()).format(new Date());
                    TextView heureMessageRecu = cardMessageRecus.findViewById(R.id.text_message_time_recus);
                    TextView nomUtilisateurRecus = cardMessageRecus.findViewById(R.id.text_message_name_recus);
                    ImageView UrlPhotoUtilisateurRecus = cardMessageRecus.findViewById(R.id.image_message_profile);

                    textMsgRecus = text_message_discussion.getText();

                    if(non_chat_header.equals("Michel"))
                    {
                        UrlPhotoUtilisateurRecus.setImageResource(R.drawable.michel);
                    }
                   else
                    {
                        UrlPhotoUtilisateurRecus.setImageResource(R.drawable.kamel);
                    }


                    // avec sharedPreferences
                    UtilisateurManager.addMessageRecusInsideDiscussion(ctx, "message_recus_discussion", textMsgRecus);
                    String messageRecusDepuisInsideDiscussion = UtilisateurManager.getMessageRecusInsideDiscussion(ctx);
                    messageRecus.setText(messageRecusDepuisInsideDiscussion);

                    nomUtilisateurRecus.setText(non_chat_header);

                    //en local
                    //messageRecus.setText(textMsgEnvoyer);

//                    date = DateConvertisseur(date);
//                    heureMessageRecu.setText(date);
                    //messageLu.setImageResource(R.drawable.icone_message_lu);


                    // date with real date system now
                    heureMessageRecu.setText(heureNowMsgReus);

                    // sharedPreference pour l'heure
                    UtilisateurManager.addHeureMessageRecus(ctx, "heure_Msg", heureNowMsgReus);


                    if(!text_message_discussion.getText().toString().equals("")){
                        tourMessageEnvoyer[0] = "true";
                        chat_message_container.addView(cardMessageRecus);

                        son_message_recu.start();
                    }


                    textMsgRecus.clear();
                }



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
//
//    private void addImageBetweentext(Bitmap drawable, EditText editText1) {
//
//
//        int selectionCursor = editText1.getSelectionStart();
//        editText1.getText().insert(selectionCursor, ".");
//        selectionCursor = editText1.getSelectionStart();
//
//        SpannableStringBuilder builder = new SpannableStringBuilder(editText1.getText());
//        builder.setSpan(new ImageSpan(drawable), selectionCursor - ".".length(), selectionCursor,
//                Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
//        editText1.setText(builder);
//        editText1.setSelection(selectionCursor);
//    }


    // This method will help to retrieve the image
    public void onActivityResult(int requestCode, int resultCode, Intent data)
    {

        // Match the request 'pic id with requestCode
        if (requestCode == pic_id) {

            // BitMap is data structure of image file
            // which stor the image in memory
            Bitmap photo = (Bitmap) Objects.requireNonNull(data.getExtras()).get("data");

            // Set the image in imageview for display
            image_recuperer.setImageBitmap(photo);
        }
    }




    @RequiresApi(api = Build.VERSION_CODES.O)
    private String DateConvertisseur(String timestampWithTimeZone){
        DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd/MM/yy", Locale.ENGLISH);
        LocalDate date = LocalDate.parse(timestampWithTimeZone, inputFormatter);
        String formattedDate = outputFormatter.format(date);
        return formattedDate;
    }

}