package com.proyect.Clinica2.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;


import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.*;
import java.util.Set;
@Entity
public class Odontologo {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
        @Column
        private String apellido;
        @Column
        private String nombre;
        @Column
        private String matricula;
        @OneToMany(mappedBy = "odontologo")
        @JsonIgnore
        private Set<Turno> turnos;


        public Odontologo() {
        }

        public Odontologo(Integer id, String apellido, String nombre, String matricula) {
            this.id = id;
            this.apellido = apellido;
            this.nombre = nombre;
            this.matricula = matricula;
        }

        public Odontologo(String apellido, String nombre, String matricula) {
            this.apellido = apellido;
            this.nombre = nombre;
            this.matricula = matricula;
        }

        public Set<Turno> getTurnos() {
            return turnos;
        }

        public void setTurnos(Set<Turno> turnos) {
            this.turnos = turnos;
        }

        public Integer getId() {
            return id;
        }


        public String getApellido() {
            return apellido;
        }

        public void setApellido(String apellido) {
            this.apellido = apellido;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getMatricula() {
            return matricula;
        }

        public void setMatricula(String matricula) {
            this.matricula = matricula;
        }
    }

