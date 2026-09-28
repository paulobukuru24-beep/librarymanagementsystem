package com.librarymanagementsystem.lms.service;

import com.librarymanagementsystem.lms.entity.Return;
import com.librarymanagementsystem.lms.repository.ReturnRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReturnService {

    private final ReturnRepository returnRepository;

    public List<Return> getAllReturns() {
        return returnRepository.findAll();
    }

    public Return getReturnById(Long id) {
        return returnRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Return record not found with id: " + id));
    }

    public Return processReturn(Return returnDetail) {
        return returnRepository.save(returnDetail);
    }

    public void deleteReturn(Long id) {
        returnRepository.deleteById(id);
    }
}