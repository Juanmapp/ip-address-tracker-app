package com.proyect.Clinica2.controller;

import com.proyect.Clinica2.persistence.entity.Odontologo;
import com.proyect.Clinica2.service.OdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/odontologos")
public class OdontologoController {
    @Autowired
    private OdontologoService odontologoService;

    @GetMapping()
    public List<Odontologo> listarTodos() {
        return this.odontologoService.listar();
    }

    @PostMapping()
    public ResponseEntity<Odontologo> registrarOdontologo(@RequestBody Odontologo odontologo) {
        return ResponseEntity.ok(odontologoService.guardar(odontologo));
    }


    @GetMapping("/{id}")
    public ResponseEntity<Odontologo> buscarOdontologo(@PathVariable Integer id) {
        Odontologo odontologo = odontologoService.buscar(id).orElse(null);
       return ResponseEntity.ok(odontologo);

    }

    @PutMapping()
    public ResponseEntity<?> modificarOdontologo(@RequestBody Odontologo odontologo) {
        odontologoService.modificar(odontologo);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarOdontologo(@PathVariable Integer id) {
        odontologoService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }



}
















