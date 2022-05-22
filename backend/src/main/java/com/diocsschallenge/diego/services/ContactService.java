package com.diocsschallenge.diego.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diocsschallenge.diego.dto.ContactDTO;
import com.diocsschallenge.diego.entities.Contact;
import com.diocsschallenge.diego.repositories.ContactRepository;

@Service
public class ContactService {

	@Autowired
	private ContactRepository repository;
	
	@Transactional(readOnly = true)
	public Page<ContactDTO> findAllPaged(Pageable pageable) {
		Page<Contact> page = repository.findAll(pageable);
		return page.map(x -> new ContactDTO(x));
	}
	
	@Transactional
	public ContactDTO insert(ContactDTO dto) {
		Contact entity = new Contact();
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.setMessage(dto.getMessage());
		entity = repository.save(entity);
		return new ContactDTO(entity);
	}
}
