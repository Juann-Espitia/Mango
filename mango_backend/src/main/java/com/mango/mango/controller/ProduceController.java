package com.mango.mango.controller;

import com.mango.mango.model.Produce;
import com.mango.mango.service.ProduceService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produce")
public class ProduceController {

    private final ProduceService produceService;

    public ProduceController(ProduceService produceService){
        this.produceService = produceService;
    }

    @PostMapping
    public ResponseEntity<Produce> createProduce(@Valid @RequestBody Produce produce){
        Produce created = produceService.createProduce(produce);
        return ResponseEntity.ok(created);
    }

    @GetMapping
    public ResponseEntity<List<Produce>> getAllProduce(){
        List<Produce> produceList = produceService.getAllProduce();
        return ResponseEntity.ok(produceList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produce> getProductById(@PathVariable Long id){
        return produceService.getProduceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/farmer/{farmerId}")
    public ResponseEntity<List<Produce>> getProduceByFarmerId(@PathVariable Long farmerId){
        List<Produce> produceList = produceService.getProduceByFarmerId(farmerId);
        return ResponseEntity.ok(produceList);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Produce>> getProductByCategory(@PathVariable String category){
        List<Produce> produceList = produceService.getProduceByCategory(category);
        return ResponseEntity.ok(produceList);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produce> updateProduce(@PathVariable Long id, @Valid @RequestBody Produce produceDetails){
        Produce updated = produceService.updateProduce(id, produceDetails);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Produce> deleteProduce(@PathVariable Long id){
        produceService.deleteProduce(id);
        return ResponseEntity.noContent().build();
    }
}
