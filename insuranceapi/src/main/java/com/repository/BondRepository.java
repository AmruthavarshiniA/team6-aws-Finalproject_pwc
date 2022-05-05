package com.repository;


import org.aspectj.weaver.PoliceExtensionUse;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Bond;

@Repository
public interface BondRepository extends JpaRepository<Bond, Long>{

}
