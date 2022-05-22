package com.diocsschallenge.diego.dto;

import java.io.Serializable;

import com.diocsschallenge.diego.entities.About;

public class AboutDTO implements Serializable{

	private Long id;
	private String description;

	public AboutDTO() {
	}

	public AboutDTO(Long id, String description) {
		this.id = id;
		this.description = description;
	}

	public AboutDTO(About entity) {
		id = entity.getId();
		description = entity.getDescription();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
