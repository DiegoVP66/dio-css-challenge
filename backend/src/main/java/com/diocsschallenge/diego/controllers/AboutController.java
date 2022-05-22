package com.diocsschallenge.diego.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diocsschallenge.diego.dto.AboutDTO;
import com.diocsschallenge.diego.services.AboutService;

@RestController
@RequestMapping(value = "/about")
public class AboutController {

	@Autowired
	private AboutService service;

	@GetMapping
	public ResponseEntity<Page<AboutDTO>> findAllPaged(Pageable pageable) {
		Page<AboutDTO> page = service.findAllPaged(pageable);
		return ResponseEntity.ok().body(page);

	}
}
