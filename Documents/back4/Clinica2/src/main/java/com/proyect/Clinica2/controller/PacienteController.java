package com.proyect.Clinica2.controller;



import com.proyect.Clinica2.persistence.entity.Paciente;
import com.proyect.Clinica2.service.DomicilioService;
import com.proyect.Clinica2.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

  @Autowired
  private PacienteService pacienteService;
  @Autowired
  private DomicilioService domicilioService;

  @GetMapping()
  public List<Paciente> listarTodos() {
      return this.pacienteService.listar();
  }

    @PostMapping()
    public ResponseEntity<?> registrarPaciente(@RequestBody Paciente paciente) {
        pacienteService.guardar(paciente);
        domicilioService.crearDomicilio(paciente.getDomicilio());
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Paciente> buscarPaciente(@PathVariable Integer id) {
        Paciente paciente = pacienteService.buscar(id).orElse(null);
        return ResponseEntity.ok(paciente);

    }


    @PutMapping()
    public ResponseEntity<?> modificarPaciente(@RequestBody Paciente paciente) {
        pacienteService.modificar(paciente);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPaciente(@PathVariable Integer id) {
        pacienteService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }


}
