package com.mynotes.handler;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import com.google.inject.servlet.RequestScoped;

@RequestScoped
public class Greeter {

    public String getGreeting() {
        Date date = new Date();
        final SimpleDateFormat sdf = new SimpleDateFormat("EEE, MMM d, yyyy hh:mm:ss a z");
        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
        return "Hello, world!\n\nZeit: " + sdf.format(date);
    }

}
