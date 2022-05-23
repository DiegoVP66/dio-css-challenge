package com.diocsschallenge.diego.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diocsschallenge.diego.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
