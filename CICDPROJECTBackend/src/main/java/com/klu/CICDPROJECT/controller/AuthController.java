package com.klu.CICDPROJECT.controller;

import com.klu.CICDPROJECT.entity.User;
import com.klu.CICDPROJECT.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signup(@RequestBody User user) {
        User savedUser = userService.addUser(user);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Signup successful");
        response.put("user", savedUser);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
        boolean valid = userService.validateUser(user.getUsername(), user.getPassword());
        Map<String, Object> response = new HashMap<>();
        if (valid) {
            User dbUser = userService.findByUsername(user.getUsername()); // now works
            response.put("message", "Login successful");
            response.put("userId", dbUser.getId()); // 👈 send id to frontend
            response.put("username", dbUser.getUsername());
            return ResponseEntity.ok(response);
        } else {
            response.put("error", "Invalid credentials");
            return ResponseEntity.status(401).body(response);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, String>> deleteUser(@PathVariable Long id) {
        boolean deleted = userService.deleteUserById(id);
        Map<String, String> response = new HashMap<>();
        if (deleted) {
            response.put("message", "User and portfolio deleted successfully");
            return ResponseEntity.ok(response);
        } else {
            response.put("error", "User not found");
            return ResponseEntity.status(404).body(response);
        }
    }
}
