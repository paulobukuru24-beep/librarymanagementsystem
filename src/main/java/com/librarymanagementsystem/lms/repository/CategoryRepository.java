package com.librarymanagementsystem.lms.repository;

import com.librarymanagementsystem.lms.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;


public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}