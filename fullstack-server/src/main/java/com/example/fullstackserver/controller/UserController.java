package com.example.fullstackserver.controller;

import com.example.fullstackserver.data.DataContainer;
import com.example.fullstackserver.entity.User;
import com.example.fullstackserver.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<DataContainer<Boolean>> create(@RequestBody User user) {
        userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(new DataContainer<>(true));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<DataContainer<Boolean>> delete(@PathVariable Integer id) {
        userService.delete(id);
        return ResponseEntity.ok(new DataContainer<>(true));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DataContainer<User>> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(new DataContainer<>(userService.findById(id)));
    }

    @GetMapping
    public ResponseEntity<DataContainer<List<User>>> findAll() {
        return ResponseEntity.ok(new DataContainer<>(userService.findAll()));
    }
}
