package com.Veterinaria.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Veterinaria.entidad.Cita;

@Repository
public interface CitaRepository extends MongoRepository<Cita, String>{

}
