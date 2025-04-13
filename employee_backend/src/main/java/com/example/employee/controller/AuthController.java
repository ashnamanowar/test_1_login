package com.example.employee.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    
    // Hardcoded credentials
    private static final String HARDCODED_USERNAME = "admin";
    private static final String HARDCODED_PASSWORD = "admin123";
    
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        if (HARDCODED_USERNAME.equals(request.username) && 
            HARDCODED_PASSWORD.equals(request.password)) {
            return "Login successful";
        }
        return "Invalid credentials";
    }
    
    // Simple request DTO
    private static class LoginRequest {
        public String username;
        public String password;
    }
}