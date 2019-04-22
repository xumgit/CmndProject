package com.xum.cmnd.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter  {

	@Autowired
    private CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;

    @Autowired
    private CustomAuthenticationFailHander customAuthenticationFailHander;

	@Override
    protected void configure(HttpSecurity http) throws Exception {
		http.formLogin()
			.loginPage("/login/login")
			.loginProcessingUrl("/login/login_process")
			.failureUrl("/login/login_error")
			.successHandler(customAuthenticationSuccessHandler)
            .failureHandler(customAuthenticationFailHander)
			.permitAll()
			.and()
			.authorizeRequests()
			.antMatchers("/bootstrap-3.3.6-dist/**", "/js/**","/images/**", "/webjars/**", "**/favicon.ico", "/index")
			.permitAll()
			.anyRequest().authenticated()
			.and()
			.sessionManagement().invalidSessionUrl("http://localhost:8081/login/login")
			.and()
			.csrf()
			.disable();
    }

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.inMemoryAuthentication()
        	.passwordEncoder(new BCryptPasswordEncoder()).withUser("admin").password(new BCryptPasswordEncoder().encode("123456")).roles("USER")
        	.and()
        	.passwordEncoder(new BCryptPasswordEncoder()).withUser("test").password(new BCryptPasswordEncoder().encode("test123")).roles("ADMIN");
	 }
	
}
