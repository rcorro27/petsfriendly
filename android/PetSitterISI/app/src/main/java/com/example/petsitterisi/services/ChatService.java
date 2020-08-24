package com.example.petsitterisi.services;


import android.content.Context;
import android.widget.LinearLayout;

import com.github.nkzawa.emitter.Emitter;
import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;

import org.json.JSONException;
import org.json.JSONObject;

import java.net.URISyntaxException;
import java.util.logging.Handler;

public class ChatService {

    Context ctx;
    private Socket mSocket;
    JSONObject data;
    LinearLayout discussionContainer;
    String  message;
    Handler handler;

    public ChatService(Context ctx, LinearLayout discussionContainer) {
        this.ctx = ctx;
        this.discussionContainer = discussionContainer;


        try {
            mSocket = IO.socket("http://chat.socket.io");
        }catch (URISyntaxException e) {

        }
    }

    public void start(){
        if(mSocket != null) {
            mSocket.connect();
        }
    }

    public void sendMyMessage(String text){
        mSocket.emit("new message", text);
    }

    public JSONObject listener(){
        mSocket.on("new message", new Emitter.Listener() {
            @Override
            public void call(final Object... args) {

                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        data = (JSONObject) args[0];
                    }
                });

                handler = new Handler();

                final Runnable r = new Runnable() {
                    public void run() {
                        data = (JSONObject) args[0];
                        handler.postDelayed(this, 1000);
                    }
                };




            }


        }).connect();


        return data;
    }



}
