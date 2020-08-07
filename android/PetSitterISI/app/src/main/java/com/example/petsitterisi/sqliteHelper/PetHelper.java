package com.example.petsitterisi.sqliteHelper;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class PetHelper extends SQLiteOpenHelper {
    public PetHelper(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
//        Log.d("debug_app","create call");
//        db.execSQL("create table chien(" +
//                "id integer primary key autoincrement," +
//                "nom text," +
//                "race text," +
//                "imgName text" +
//                ")");
//        db.execSQL("insert into chien (nom, race, imgName) values( 'Toutou 1' , 'supeer toutout' ,'chien1'),( 'Toutou 2' , 'supeer toutout 2 ' ,'chien2'),( 'Toutou 3' , 'supeer toutout 3' ,'chien3')");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
//        Log.d("debug_app","upgrade call");
//        db.execSQL("drop table chien;");
//        db.execSQL("create table chien(" +
//                "id integer primary key autoincrement," +
//                "nom text," +
//                "imgName text" +
//                ")");
    }

}