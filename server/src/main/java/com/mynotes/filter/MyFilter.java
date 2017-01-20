package com.mynotes.filter;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.inject.Singleton;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

@Singleton
public class MyFilter implements Filter {

    java.util.logging.Logger logger = Logger.getLogger(MyFilter.class.getName());

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        logger.log(Level.INFO, "MyFilter: ich bin ein filter!");
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {

    }

}
