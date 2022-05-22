package com.diocsschallenge.diego.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diocsschallenge.diego.entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
