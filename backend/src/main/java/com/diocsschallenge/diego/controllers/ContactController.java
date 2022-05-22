package com.diocsschallenge.diego.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.diocsschallenge.diego.dto.ContactDTO;
import com.diocsschallenge.diego.services.ContactService;

@RestController
@RequestMapping(value = "/contact")
public class ContactController {

	@Autowired
	private ContactService service;

	@GetMapping
	public ResponseEntity<Page<ContactDTO>> findAllPaged(Pageable pageable) {
		Page<ContactDTO> page = service.findAllPaged(pageable);
		return ResponseEntity.ok().body(page);
	}
	
	@PostMapping
	public ResponseEntity<ContactDTO> insert(@RequestBody ContactDTO dto) {
		ContactDTO newDTO = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(newDTO);
	}
}
