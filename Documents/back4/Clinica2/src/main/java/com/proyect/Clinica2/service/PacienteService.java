package com.proyect.Clinica2.service;

import com.proyect.Clinica2.persistence.entity.Paciente;
import com.proyect.Clinica2.persistence.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    @Autowired
    PacienteRepository pacienteRepository;

    public List<Paciente> listar() {
        return pacienteRepository.findAll();
    }

    public Paciente guardar(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }
    public Paciente modificar(Paciente paciente) {
        Integer id = paciente.getId();
        if ( id != null) {
            return pacienteRepository.save(paciente);
        } else {
            return null;
        }
    }

    public void eliminar(Integer id) {
        pacienteRepository.deleteById(id);      ;
    }

    public Optional<Paciente> buscar(Integer id) {
        return pacienteRepository.findById(id);

    }
}
