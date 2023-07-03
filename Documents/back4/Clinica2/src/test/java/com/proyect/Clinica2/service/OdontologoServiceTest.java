package com.proyect.Clinica2.service;
import com.proyect.Clinica2.persistence.entity.Odontologo;

import org.junit.*;



import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import java.util.Optional;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class OdontologoServiceTest {

    @Autowired
    private OdontologoService odontologoService;

    @Before
    public void registrarOdontologosBefore() {
        Odontologo odontologo = new Odontologo("Licini", "Juan Manuel", "ASAGF");
        odontologoService.guardar(odontologo);
    }

    @Test
    public void listar() {

        List<Odontologo> odontologos = odontologoService.listar();
        Assert.assertTrue(odontologos.size()>0);


    }

    @Test
    public void guardar() {

        Odontologo odontologo2 = new Odontologo("Messi", "Leo", "123AAA");
        Odontologo odontologo = odontologoService.guardar(odontologo2);

        Assert.assertNotNull(odontologo);




    }

    @Test
    public void modificar() {

        Odontologo odontologo = odontologoService.buscar(2).get();
        odontologo.setApellido("Messi");
        odontologoService.modificar(odontologo);
        Assert.assertTrue(odontologoService.buscar(2).get().getApellido().equals("Messi"));



    }

    @Test
    public void eliminar() {
        odontologoService.eliminar(3);
        Assert.assertFalse(odontologoService.buscar(3).isPresent());

    }

    @Test
    public void buscar() {
    Optional<Odontologo> odontologo3 = odontologoService.buscar(1);
    Assert.assertTrue(odontologo3 != null);

    }
}