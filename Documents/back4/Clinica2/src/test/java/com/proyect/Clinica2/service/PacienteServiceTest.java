package com.proyect.Clinica2.service;
import com.proyect.Clinica2.persistence.entity.Paciente;
import org.junit.*;

import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class PacienteServiceTest {

    @Autowired
    private PacienteService pacienteService;


    @Before
    public void registrarPacientesBefore() {
        Paciente paciente = new Paciente("Pepito", "Milanesa","134324", new Date(03-01-2023));
        pacienteService.guardar(paciente);
    }


    @Test
    public void listar() {
        List<Paciente> pacientes = pacienteService.listar();
        Assert.assertTrue(pacientes.size()>0);
    }

    @Test
    public void guardar() {
        Paciente paciente2 = new Paciente("Pepe", "Milas", "1232365", new Date(01-05-2023));
        Paciente paciente = pacienteService.guardar(paciente2);

        Assert.assertNotNull(paciente);
    }

    @Test
    public void modificar() {

            Paciente paciente = pacienteService.buscar(5).get();
            paciente.setApellido("Carnita");
            pacienteService.modificar(paciente);
            Assert.assertTrue(pacienteService.buscar(5).get().getApellido().equals("Carnita"));

    }

    @Test
    public void eliminar() {

        pacienteService.eliminar(3);
        Assert.assertFalse(pacienteService.buscar(3).isPresent());


    }

    @Test
    public void buscar() {
        Optional<Paciente> paciente3 = pacienteService.buscar(1);
        Assert.assertNotNull(paciente3 !=null);


    }
}