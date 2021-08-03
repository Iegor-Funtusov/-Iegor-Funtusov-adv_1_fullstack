package com.example.fullstackserver.service;

import com.example.fullstackserver.entity.User;

import java.util.List;

public interface UserService {

    void create(User user);
    void delete(Integer id);
    User findById(Integer id);
    List<User> findAll();
}
