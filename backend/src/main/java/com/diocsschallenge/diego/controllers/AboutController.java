package com.diocsschallenge.diego.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public ResponseEntity<List<AboutDTO>> findAll() {
		List<AboutDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);

	}
}
