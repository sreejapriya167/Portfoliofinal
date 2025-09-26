package com.klu.CICDPROJECT.dto;

import java.util.List;
import java.util.Map;

public class PortfolioDTO {
    private Long id;
    private Long userId;
    private String username;
    private String bio;
    private String about;
    private List<SkillCategory> skills;      // JSON -> List
    private List<ProjectDTO> projects;       // JSON -> List
    private Map<String, String> socialLinks; // JSON -> Map
    private String imageUrl;

    // --- Inner DTOs for structured data ---
    public static class SkillCategory {
        private String category;
        private List<String> list;

        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }

        public List<String> getList() { return list; }
        public void setList(List<String> list) { this.list = list; }
    }

    public static class ProjectDTO {
        private String title;
        private String description;
        private String imageUrl;

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public String getImageUrl() { return imageUrl; }
        public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    }

    // --- Getters and Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getAbout() { return about; }
    public void setAbout(String about) { this.about = about; }

    public List<SkillCategory> getSkills() { return skills; }
    public void setSkills(List<SkillCategory> skills) { this.skills = skills; }

    public List<ProjectDTO> getProjects() { return projects; }
    public void setProjects(List<ProjectDTO> projects) { this.projects = projects; }

    public Map<String, String> getSocialLinks() { return socialLinks; }
    public void setSocialLinks(Map<String, String> socialLinks) { this.socialLinks = socialLinks; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
