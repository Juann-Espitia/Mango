package com.mango.mango.service;

import com.mango.mango.model.Farmer;
import com.mango.mango.repository.FarmerRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service // this lets spring know this is a service component and automatically manages this class
public class FarmerService {

    private final FarmerRepository farmerRepository; // this is like importing a file in python and setting it as an alias (import pandas as pd)

    public FarmerService(FarmerRepository farmerRepository){ // this code is needed to help the import
        // this tells spring that we need farmerRepo in FarmerService
        this.farmerRepository = farmerRepository;
    }

    // now we just create different methods for farmers: create a farmer, list all farmers, update a farmers info, etc.

    public Farmer createFarmer(Farmer farmer){
        return farmerRepository.save(farmer);
    }

    public List<Farmer> getAllFarmers(){
        return farmerRepository.findAll();
    }

    public Optional<Farmer> getFarmerById(Long id){
        return farmerRepository.findById(id);
    }

    public Farmer updateFarmer(Long id, Farmer farmerDetails){
        Farmer farmer = farmerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Farmer not found with id: " + id)); // this is a lambda function that throws an exception if no farmer found
        farmer.setName(farmerDetails.getName());
        farmer.setEmail(farmerDetails.getEmail());
        farmer.setPhone(farmerDetails.getPhone());
        farmer.setLocation(farmerDetails.getLocation());

        return farmerRepository.save(farmer);
    }

    public void deleteFarmer(Long id){
        farmerRepository.deleteById(id);
    }

}
