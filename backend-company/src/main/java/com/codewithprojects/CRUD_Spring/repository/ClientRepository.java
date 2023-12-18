package com.codewithprojects.CRUD_Spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codewithprojects.CRUD_Spring.model.Client;
@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {

}
