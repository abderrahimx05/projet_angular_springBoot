package com.codewithprojects.CRUD_Spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codewithprojects.CRUD_Spring.model.Client;
import com.codewithprojects.CRUD_Spring.repository.ClientRepository;
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class ClientController {
 
    @Autowired
    private ClientRepository clientRepository;
    
    //get all client
    @GetMapping("/clients")

    public List<Client> getAllClients(){
        return clientRepository.findAll();

    }
    @PostMapping("/newclient")
    Client newClient(@RequestBody Client newClient){
        return clientRepository.save(newClient);
    }
    @GetMapping("/client/{id}")
    Optional<Client> getClientById(@PathVariable Long id){
        return clientRepository.findById(id);
    }
    @PutMapping("/client/{id}")
    Optional<Object> updateClient(@RequestBody Client newClient,@PathVariable Long id){
        return clientRepository.findById(id).map(client ->{
            client.setFirstname(newClient.getFirstname());
            client.setLastname(newClient.getLastname());
            client.setEmail(newClient.getEmail());
            client.setVille(newClient.getVille());
            return clientRepository.save(client);
        }) ;
    }
    
    @DeleteMapping("/client/{id}")
    java.lang.String deleteClient(@PathVariable Long id){
        clientRepository.deleteById(id);
        return "utilisateur avec id: "+id+"est bien supprimer.";
    }
}
