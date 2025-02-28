package com.Veterinaria.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Veterinaria.Respuesta.Respuesta;
import com.Veterinaria.entidad.Cita;
import com.Veterinaria.service.CitaService;

@RestController
@RequestMapping("/citas")
@CrossOrigin(origins = "*")
public class CitaWs {
	@Autowired
	private CitaService citaService;	

	@GetMapping("listar")
	public Respuesta listar() {
		return citaService.listarCitas();
	}
	
	@PostMapping("guardar")
	public Respuesta guardad(@RequestBody Cita cita) {	
		return citaService.guardarCita(cita);
	}
    
	@GetMapping("buscar/{idCita}")
	public ResponseEntity<Cita> buscar(@PathVariable("idCita") String idCita) {
		return citaService.obtenerCitaPorId(idCita);
	}
	
	@PostMapping("eliminar")
	public Respuesta eliminar(@RequestBody Cita cita) {	
		return citaService.eliminarCita(cita);
	}
	
	
	
}
