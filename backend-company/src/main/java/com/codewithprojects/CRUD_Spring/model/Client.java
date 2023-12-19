package com.codewithprojects.CRUD_Spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="client")
public class Client {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id ;
     
     @Column(name ="firstname")
     private String firstname;

     @Column(name ="lastname")
     private String lastname;

     @Column(name="email")
     private String email;
    
     @Column(name="ville")
     private String ville;
    
    

    public Client() {
    }

    public Client(Long id, String firstname, String lastname, String email, String ville) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.ville = ville ;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
     public String getVille() {
        return this.ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }
    
}
