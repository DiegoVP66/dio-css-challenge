package com.diocsschallenge.diego.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diocsschallenge.diego.dto.AboutDTO;
import com.diocsschallenge.diego.entities.About;
import com.diocsschallenge.diego.repositories.AboutRepository;
import com.diocsschallenge.diego.services.exceptions.DataBaseException;
import com.diocsschallenge.diego.services.exceptions.ResourceNotFoundException;

@Service
public class AboutService {

	@Autowired
	private AboutRepository repository;
	
	@Transactional(readOnly = true)
	public List<AboutDTO> findAll() {
		List<About> list = repository.findAll();
		return list.stream().map(x -> new AboutDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public AboutDTO findById(Long id) {
		Optional<About> obj = repository.findById(id);
		About entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id not found:" + id));
		return new AboutDTO(entity);
	}
	
	@Transactional
	public AboutDTO insert(AboutDTO dto) {
		About entity = new About();
		copyDTOToEntity(entity, dto);
		entity = repository.save(entity);
		return new AboutDTO(entity);
	}
	
	@Transactional
	public AboutDTO update(Long id, AboutDTO dto) {
		try {
			About entity = repository.getById(id);
			copyDTOToEntity(entity, dto);
			return new AboutDTO(entity);
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

	private void copyDTOToEntity(About entity, AboutDTO dto) {
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
	}
}
