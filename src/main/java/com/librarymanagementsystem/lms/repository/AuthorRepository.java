package com.librarymanagementsystem.lms.repository;

import com.librarymanagementsystem.lms.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;


public interface AuthorRepository extends JpaRepository<Author, Long> {
    List<Author> findByNameContainingIgnoreCase(String name);
}