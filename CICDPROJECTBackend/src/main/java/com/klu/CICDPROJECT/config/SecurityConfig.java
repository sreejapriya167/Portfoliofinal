package com.klu.CICDPROJECT.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .formLogin(form -> form.disable()) // disable default login page
                .httpBasic(basic -> basic.disable()) // disable HTTP Basic
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll()
                        .requestMatchers("/api/portfolio/**").permitAll()
                        .requestMatchers("/images/**").permitAll()
                        .anyRequest().permitAll());

        return http.build();
    }
}
