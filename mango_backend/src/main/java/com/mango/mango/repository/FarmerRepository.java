package com.mango.mango.repository;

import com.mango.mango.model.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // handles database exceptions
public interface FarmerRepository extends JpaRepository<Farmer, Long> { // this automatically creates methods for our database


}
