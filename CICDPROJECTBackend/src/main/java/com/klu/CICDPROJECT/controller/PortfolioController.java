package com.klu.CICDPROJECT.controller;

import com.klu.CICDPROJECT.dto.PortfolioDTO;
import com.klu.CICDPROJECT.entity.Portfolio;
import com.klu.CICDPROJECT.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/portfolio")
 @CrossOrigin(origins = "*")  // your frontend origin
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    // Add portfolio
    @PostMapping("/add")
    public ResponseEntity<Portfolio> addPortfolio(@RequestBody Portfolio portfolio) {
        Portfolio saved = portfolioService.addPortfolio(portfolio);
        return ResponseEntity.ok(saved);
    }

    // Get portfolio by user id
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PortfolioDTO>> getPortfolioByUser(@PathVariable Long userId) {
        List<Portfolio> portfolios = portfolioService.findByUserId(userId);

        // Map entities to DTOs
        List<PortfolioDTO> dtos = portfolios.stream()
                                            .map(portfolioService::mapToDTO)
                                            .collect(Collectors.toList());

        return ResponseEntity.ok(dtos);
    }
}
