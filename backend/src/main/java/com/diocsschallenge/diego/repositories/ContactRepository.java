package com.diocsschallenge.diego.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diocsschallenge.diego.entities.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
