package com.diocsschallenge.diego.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diocsschallenge.diego.dto.ProjectDTO;
import com.diocsschallenge.diego.entities.Project;
import com.diocsschallenge.diego.repositories.ProjectRepository;
import com.diocsschallenge.diego.services.exceptions.DataBaseException;
import com.diocsschallenge.diego.services.exceptions.ResourceNotFoundException;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository repository;

	@Transactional(readOnly = true)
	public Page<ProjectDTO> findAllPaged(Pageable pageable) {
		Page<Project> page = repository.findAll(pageable);
		return page.map(x -> new ProjectDTO(x));
	}

	@Transactional(readOnly = true)
	public ProjectDTO findById(Long id) {
		Optional<Project> obj = repository.findById(id);
		Project entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id not found:" + id));
		return new ProjectDTO(entity);
	}

	@Transactional
	public ProjectDTO insert(ProjectDTO dto) {
		Project entity = new Project();
		copyDTOToEntity(entity, dto);
		entity = repository.save(entity);
		return new ProjectDTO(entity);
	}

	@Transactional
	public ProjectDTO update(Long id, ProjectDTO dto) {
		try {
			Project entity = repository.getById(id);
			copyDTOToEntity(entity, dto);
			return new ProjectDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found");
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not Found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation!");
		}
	}

	private void copyDTOToEntity(Project entity, ProjectDTO dto) {
		entity.setName(dto.getName());
		entity.setTitle(dto.getTitle());
		entity.setText(dto.getText());
		entity.setNote(dto.getNote());
		entity.setLink(dto.getLink());
	}
}
