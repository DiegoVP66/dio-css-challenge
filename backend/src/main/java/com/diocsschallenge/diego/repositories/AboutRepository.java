package com.diocsschallenge.diego.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diocsschallenge.diego.entities.About;

@Repository
public interface AboutRepository extends JpaRepository<About, Long> {

}
