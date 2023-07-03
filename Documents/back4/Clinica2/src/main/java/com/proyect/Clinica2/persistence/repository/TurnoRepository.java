package com.proyect.Clinica2.persistence.repository;

import com.proyect.Clinica2.persistence.entity.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TurnoRepository extends JpaRepository<Turno, Integer> {
}
