package com.diocsschallenge.diego.dto;

import java.io.Serializable;

import com.diocsschallenge.diego.entities.About;

public class AboutDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String title;
	private String description;

	public AboutDTO() {
	}

	public AboutDTO(Long id, String description, String title) {
		this.id = id;
		this.title = title;
		this.description = description;
	}

	public AboutDTO(About entity) {
		id = entity.getId();
		title = entity.getTitle();
		description = entity.getDescription();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
