package com.proyect.Clinica2.service;


import com.proyect.Clinica2.persistence.entity.Domicilio;
import com.proyect.Clinica2.persistence.repository.DomicilioRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class DomicilioService {
    @Autowired
    DomicilioRepository domicilioRepository;

    public Domicilio crearDomicilio(Domicilio domicilio) {
        return domicilioRepository.save(domicilio);
    }


    }

