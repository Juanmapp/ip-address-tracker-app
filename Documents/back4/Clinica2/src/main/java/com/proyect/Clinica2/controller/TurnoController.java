package com.proyect.Clinica2.controller;


import com.proyect.Clinica2.persistence.entity.Paciente;
import com.proyect.Clinica2.persistence.entity.Turno;
import com.proyect.Clinica2.service.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/Turnos")
public class TurnoController {

    @Autowired
    TurnoService turnoService;

    @PostMapping()
    public ResponseEntity<?> registrarTurno(@RequestBody Turno turno) {
        turnoService.guardarTurno(turno);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping()
    public List<Turno> listarTodos() {
        return turnoService.listarTodos();

    }

    @PutMapping()
    public ResponseEntity<?> modificarTurno(@RequestBody Turno turno) {
        turnoService.guardarTurno(turno);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarTurno(@PathVariable Integer id) {
        turnoService.eliminarTurno(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Turno> buscarTurno(@PathVariable Integer id) {
        Turno turno = turnoService.buscar(id).orElse(null);
        return ResponseEntity.ok(turno);

    }





}
