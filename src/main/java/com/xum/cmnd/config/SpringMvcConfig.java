package com.xum.cmnd.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SuppressWarnings("deprecation")
//@Configuration
public class SpringMvcConfig extends WebMvcConfigurerAdapter {
    @Autowired
    private HttpRequestInterceptor httpRequestInterceptor;
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(httpRequestInterceptor).addPathPatterns("/**/*");
        super.addInterceptors(registry);
    }
}
