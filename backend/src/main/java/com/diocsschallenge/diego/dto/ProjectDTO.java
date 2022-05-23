package com.diocsschallenge.diego.dto;

import java.io.Serializable;

import com.diocsschallenge.diego.entities.Project;

public class ProjectDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String title;
	private String name;
	private String note;
	private String text;
	private String link;

	public ProjectDTO() {
	}

	public ProjectDTO(Long id, String title, String name, String note, String text, String link) {
		this.id = id;
		this.title = title;
		this.name = name;
		this.note = note;
		this.text = text;
		this.link = link;
	}

	public ProjectDTO(Project entity) {
		id = entity.getId();
		title = entity.getTitle();
		name = entity.getName();
		note = entity.getNote();
		text = entity.getText();
		link = entity.getLink();
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

}
