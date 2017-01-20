package com.mynotes.servlet;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.inject.Inject;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.inject.Provider;
import com.mynotes.handler.Greeter;

public class GreetingServlet extends HttpServlet {

    java.util.logging.Logger logger = Logger.getLogger(GreetingServlet.class.getName());

    private static final long serialVersionUID = -3375610661228429807L;

    @Inject
    Provider<Greeter> welcomeTexter;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        logger.log(Level.INFO, "GreetingServlet: here we go!");
        response.setContentType("text/plain");
        response.getWriter().println(welcomeTexter.get().getGreeting());
    }

}
