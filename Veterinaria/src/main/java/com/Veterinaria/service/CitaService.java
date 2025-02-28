package com.Veterinaria.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Veterinaria.Respuesta.Respuesta;
import com.Veterinaria.entidad.Cita;
import com.Veterinaria.repository.CitaRepository;

@Service
public class CitaService {
	@Autowired
	private CitaRepository citaRepository;

	public Respuesta listarCitas() {
		Respuesta rs = new Respuesta();
		if(citaRepository.findAll().isEmpty()) {
			rs.setMensaje("No hay citas registradas");
			rs.setSuccess(false);
			rs.setObj(null);
			return rs;
		}else {
			rs.setMensaje("Existen estos clientes");
			rs.setSuccess(true);
			rs.setObj(citaRepository.findAll());
		}
		return rs;
	}

	public Respuesta guardarCita(Cita cita) {
		Respuesta rs = new Respuesta();
		if (citaRepository.findAll().isEmpty()) {
			citaRepository.save(cita);
			rs.setMensaje("Primera cita guardada");
			rs.setSuccess(true);
			rs.setObj(cita);
			return rs;
		}
	    if (cita.getId() != null && citaRepository.existsById(cita.getId())) {
	        rs.setMensaje("Error. Ya existe una Cita con esta Id");
	        rs.setSuccess(false);
	        rs.setObj(null);
	        return rs;
	    }
		for (Cita c : citaRepository.findAll()) {
			if (cita.getNombreCliente().equalsIgnoreCase(c.getNombreCliente()) && cita.getNombreMascota().equalsIgnoreCase(c.getNombreMascota())) {
				rs.setMensaje("La cita no fue registrada el cliente ya tiene una cita registrada para esta mascota para el dia:"+ c.getFechaHora());
				rs.setSuccess(false);
				rs.setObj(c);
				return rs;
			}
		}
		citaRepository.save(cita);
		rs.setMensaje("Cita guardada");
		rs.setSuccess(true);
		rs.setObj(cita);
		return rs;
	}

	public ResponseEntity<Cita> obtenerCitaPorId(String idCita){
		Cita cita = citaRepository.findById(idCita).orElse(null);
		if (cita == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
			return ResponseEntity.status(HttpStatus.OK).body(cita);
	}
    
	public Respuesta eliminarCita(Cita cita) {   
		Respuesta rs = new Respuesta();
		if(citaRepository.existsById(cita.getId())) {
			
        	cita = citaRepository.findById(cita.getId()).orElse(null);        	
        	rs.setObj(new Cita(cita.getId(),cita.getNombreCliente(),cita.getNombreMascota(),cita.getRazonCita(), cita.getFechaHora()));  
        	citaRepository.delete(cita);
			rs.setMensaje("Cita eliminada");
			rs.setSuccess(true);
			return rs;
		}else {
			
		rs.setMensaje("La cita que tratas de eliminar no existe");
		rs.setSuccess(false);
		rs.setObj(null);
		return rs;
		}
	}
    
}
