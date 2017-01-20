package com.mynotes.guice;

import javax.servlet.annotation.WebListener;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Scopes;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;
import com.mynotes.filter.MyFilter;
import com.mynotes.handler.Greeter;
import com.mynotes.servlet.GreetingServlet;

@WebListener
public class MynotesGuiceListener extends GuiceServletContextListener  {

    class MyFilterModule extends ServletModule {
        @Override
        protected void configureServlets() {
            filter("/*").through(MyFilter.class);
        }
    }

    class MyServletModule extends ServletModule {
        @Override
        protected void configureServlets() {
            bind(Greeter.class);
            bind(GreetingServlet.class).in(Scopes.SINGLETON);
            serve("/hello").with(GreetingServlet.class);
        }
    }

    @Override
    protected Injector getInjector() {
        return Guice.createInjector(new MyFilterModule(), new MyServletModule());
    }

}
