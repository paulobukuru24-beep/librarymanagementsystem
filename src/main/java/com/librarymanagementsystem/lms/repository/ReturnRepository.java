package com.librarymanagementsystem.lms.repository;

import com.librarymanagementsystem.lms.entity.Return;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;


public interface ReturnRepository extends JpaRepository<Return, Long> {
    Optional<Return> findByBorrowingId(Long borrowingId);
}