package com.mango.mango.repository;

import com.mango.mango.model.Produce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProduceRepository extends JpaRepository<Produce, Long> {

    List<Produce> findByFarmerId(Long farmerId); // these 2 lines automatically create sql query code to search in our database
    List<Produce> findByCategory(String category);
}
