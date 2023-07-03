package com.proyect.Clinica2.config;

import com.proyect.Clinica2.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private AppUserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/admin.html/**").hasAuthority("ADMIN")
                .antMatchers("user.index/**").hasAnyAuthority("USER", "ADMIN")
                .antMatchers("user.html/**").hasAnyAuthority("USER", "ADMIN")
                .anyRequest()
                .authenticated().and()
                .formLogin().permitAll()
                .and().logout().permitAll()
                .and().exceptionHandling().accessDeniedPage("/badCredentials.html");

    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider =
                new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(userService);
        return provider;
    }
}


//package com.proyect.Clinica2.config;
//
//
//import com.proyect.Clinica2.service.AppUserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration {
//
//  @Autowired
//  private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//  @Autowired
//  private AppUserService userService ;
//
//
//  public void configure(AuthenticationManagerBuilder auth) {
//    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//    provider.setPasswordEncoder(bCryptPasswordEncoder);
//    provider.setUserDetailsService(userService);
//    auth.authenticationProvider(provider);
//  }
//
//  @Bean
//  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//    http.csrf().disable()
//        .authorizeRequests()
//        .requestMatchers(HttpMethod.GET, "/").permitAll()
//        .requestMatchers( "/public/**").permitAll()
//        .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")
//        .requestMatchers("/admin/**").hasRole("ADMIN")
//        .anyRequest().authenticated().and().formLogin().and().logout();
//
//    http.httpBasic();
//    return http.build();
//  }
//
//
//}
