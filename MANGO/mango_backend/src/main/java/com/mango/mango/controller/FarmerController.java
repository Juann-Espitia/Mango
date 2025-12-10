package com.mango.mango.controller;

import com.mango.mango.model.Farmer;
import com.mango.mango.service.FarmerService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // this tells spring this class handles HTTP request and return JSON
@RequestMapping("/api/farmers") // this is the base URL endpoint for this controller
public class FarmerController {

    private final FarmerService farmerService;

    public FarmerController(FarmerService farmerService){
        this.farmerService = farmerService;
    }

    @PostMapping // is used for post which is creating stuff
    public ResponseEntity<Farmer> createFarmer(@Valid @RequestBody Farmer farmer){ // @RequestBody converts the JSON received and turns it into a Farmer object; @Valid checks that the @NotBlanka and @Email in the farmer class is actually valid
        // ResponseEntity<Farmer> this allows you to control what is returned, in this use it returns the farmer object we created and its status code
        Farmer created = farmerService.createFarmer(farmer);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping // is used for getting/receiving info
    public ResponseEntity<List<Farmer>> getAllFarmers(){
        List<Farmer> farmers = farmerService.getAllFarmers();
        return ResponseEntity.ok(farmers); // this is a shorthand for the response in the createFarmer
    }

    @GetMapping("/{id}") // id is a placeholder
    public ResponseEntity<Farmer> getFarmerById(@PathVariable Long id){ // @PathVariable extracts the id from the URL and converts it to Long
        return farmerService.getFarmerById(id)
                .map(ResponseEntity::ok) // if farmer exists we wrap it with a 200 status
                .orElse(ResponseEntity.notFound().build()); // if it doesn't exist we return 404
    }

    @PutMapping("/{id}")
    public ResponseEntity<Farmer> updateFarmer(
            @PathVariable Long id,
            @Valid @RequestBody Farmer farmerDetails){
        Farmer updated = farmerService.updateFarmer(id, farmerDetails);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFarmer(@PathVariable Long id){
        farmerService.deleteFarmer(id);
        return ResponseEntity.noContent().build(); // returns 204 no content
    }
}
