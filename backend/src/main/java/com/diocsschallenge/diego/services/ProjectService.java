package com.diocsschallenge.diego.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diocsschallenge.diego.dto.ProjectDTO;
import com.diocsschallenge.diego.entities.Project;
import com.diocsschallenge.diego.repositories.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository repository;
	
	@Transactional(readOnly = true)
	public Page<ProjectDTO> findAllPaged(Pageable pageable) {
		Page<Project> page = repository.findAll(pageable);
		return page.map(x -> new ProjectDTO(x));
	}
	
	@Transactional
	public ProjectDTO insert(ProjectDTO dto) {
		Project entity = new Project();
		entity.setName(dto.getName());
		entity.setTitle(dto.getTitle());
		entity.setText(dto.getText());
		entity.setNote(dto.getNote());
		entity.setLink(dto.getLink());
		entity = repository.save(entity);
		return new ProjectDTO(entity);
	}
}
