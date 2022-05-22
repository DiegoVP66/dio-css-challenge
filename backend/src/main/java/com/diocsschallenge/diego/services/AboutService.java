package com.diocsschallenge.diego.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
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
	public List<AboutDTO> findAll() {
		List<About> list = repository.findAll();
		return list.stream().map(x -> new AboutDTO(x)).collect(Collectors.toList());
	}
}
