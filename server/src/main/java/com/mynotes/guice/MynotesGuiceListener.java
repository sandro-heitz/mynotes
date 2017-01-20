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

// http://stackoverflow.com/questions/17285388/how-to-use-guice-servlet-with-jersey-2-0
// https://hk2.java.net/guice-bridge/
// http://www.aberger.at/en/blog/design/2016/11/17/bridge-jersey2-guice.html

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
