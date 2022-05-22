package com.diocsschallenge.diego.dto;

import java.io.Serializable;

import com.diocsschallenge.diego.entities.Contact;

public class ContactDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private String email;
	private String message;

	public ContactDTO() {
	}

	public ContactDTO(Long id, String name, String email, String message) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.message = message;
	}

	public ContactDTO(Contact entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		message = entity.getMessage();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
