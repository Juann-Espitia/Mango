package com.mango.mango.service;

import com.mango.mango.model.Produce;
import com.mango.mango.repository.ProduceRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProduceService {

    private final ProduceRepository produceRepository;

    public ProduceService(ProduceRepository produceRepository){ // like before spring sees this and injects the produceRepo in this class
        this.produceRepository = produceRepository;
    }

    public Produce createProduce(Produce produce){
        return produceRepository.save(produce);
    }

    public List<Produce> getAllProduce(){
        return produceRepository.findAll();
    }

    public Optional<Produce> getProduceById(Long id){
        return produceRepository.findById(id);
    }

    public List<Produce> getProduceByFarmerId(Long farmerId){
        return produceRepository.findByFarmerId(farmerId);
    }

    public List<Produce> getProduceByCategory(String category){
        return produceRepository.findByCategory(category);
    }

    public Produce updateProduce(Long id, Produce produceDetails){
        Produce produce = produceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produce not found with id: " + id));

        produce.setName(produceDetails.getName());
        produce.setCategory(produceDetails.getCategory());
        produce.setQuantity(produceDetails.getQuantity());
        produce.setUnit(produceDetails.getUnit());
        produce.setPricePerUnit(produceDetails.getPricePerUnit());
        produce.setDescription(produceDetails.getDescription());
        produce.setFarmer(produceDetails.getFarmer());

        return produceRepository.save(produce);
    }

    public void deleteProduce(Long id){
        produceRepository.deleteById(id);
    }

}
