package com.diocsschallenge.diego.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diocsschallenge.diego.dto.AboutDTO;
import com.diocsschallenge.diego.entities.About;
import com.diocsschallenge.diego.repositories.AboutRepository;

@Service
public class AboutService {

	@Autowired
	private AboutRepository repository;
	
	@Transactional(readOnly = true)
	public Page<AboutDTO> findAllPaged(Pageable pageable) {
		Page<About> page = repository.findAll(pageable);
		return page.map(x -> new AboutDTO(x));
	}
}
