package com.noahcharlton.pwb;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static final String VERSION = "0.1";

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}