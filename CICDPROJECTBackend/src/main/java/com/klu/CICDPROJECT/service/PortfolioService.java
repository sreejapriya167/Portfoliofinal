package com.klu.CICDPROJECT.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.klu.CICDPROJECT.dto.PortfolioDTO;
import com.klu.CICDPROJECT.entity.Portfolio;
import com.klu.CICDPROJECT.entity.User;
import com.klu.CICDPROJECT.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    private final ObjectMapper objectMapper = new ObjectMapper();

    // Save portfolio
    public Portfolio addPortfolio(Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    // Get portfolios by user id
    public List<Portfolio> findByUserId(Long userId) {
        User user = new User();
        user.setId(userId); // Only ID is needed for JPA query
        return portfolioRepository.findByUser(user);
    }

    // Map Portfolio entity to DTO
    public PortfolioDTO mapToDTO(Portfolio portfolio) {
        PortfolioDTO dto = new PortfolioDTO();
        dto.setId(portfolio.getId());
        dto.setUserId(portfolio.getUser().getId());
        dto.setUsername(portfolio.getUser().getUsername());
        dto.setBio(portfolio.getBio());
        dto.setAbout(portfolio.getAbout());
        dto.setImageUrl(portfolio.getImageUrl());

        try {
            // Parse JSON stored in DB into structured objects
            if (portfolio.getSkills() != null) {
                dto.setSkills(objectMapper.readValue(
                        portfolio.getSkills(),
                        new TypeReference<List<PortfolioDTO.SkillCategory>>() {}
                ));
            }

            if (portfolio.getProjects() != null) {
                dto.setProjects(objectMapper.readValue(
                        portfolio.getProjects(),
                        new TypeReference<List<PortfolioDTO.ProjectDTO>>() {}
                ));
            }

            if (portfolio.getSocialLinks() != null) {
                dto.setSocialLinks(objectMapper.readValue(
                        portfolio.getSocialLinks(),
                        new TypeReference<Map<String, String>>() {}
                ));
            }

        } catch (Exception e) {
            throw new RuntimeException("Error mapping Portfolio entity to DTO", e);
        }

        return dto;
    }
}
