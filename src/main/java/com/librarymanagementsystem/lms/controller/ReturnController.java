package com.librarymanagementsystem.lms.controller;

import com.librarymanagementsystem.lms.entity.Return;
import com.librarymanagementsystem.lms.service.ReturnService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/returns")
@RequiredArgsConstructor
public class ReturnController {

    private final ReturnService returnService;

    @GetMapping
    public List<Return> getAllReturns() {
        return returnService.getAllReturns();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Return> getReturnById(@PathVariable Long id) {
        return ResponseEntity.ok(returnService.getReturnById(id));
    }

    @PostMapping
    public ResponseEntity<Return> processReturn(@RequestBody Return returnDetail) {
        return ResponseEntity.ok(returnService.processReturn(returnDetail));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReturn(@PathVariable Long id) {
        returnService.deleteReturn(id);
        return ResponseEntity.noContent().build();
    }
}