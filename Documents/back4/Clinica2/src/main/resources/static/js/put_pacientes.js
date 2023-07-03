window.addEventListener('load', function () {

    const form_update = document.querySelector('#update_paciente_form');
    const div_formulario = document.querySelector('#div_paciente_updating');
 
    form_update.addEventListener('submit', function (event) {

        event.preventDefault();
 
        let pacienteId = document.querySelector('#paciente-id').value;
 
        
        const carga = {
            id: pacienteId,
            dni: document.querySelector('#dni').value,
            nombre: document.querySelector('#nombre-paciente').value,
            apellido: document.querySelector('#apellido-paciente').value,
            fechaDeAlta: document.querySelector('#fecha-de-alta').value,
            domicilio: {
                id: document.querySelector('#domicilio-id').value,
                calle: document.querySelector('#domicilio-calle').value,
                altura: document.querySelector('#domicilio-numero').value,
                localidad: document.querySelector('#domicilio-localidad').value,
                provincia: document.querySelector('#domicilio-provincia').value
            }
        };
 
        
        const url = '/pacientes'; 
        const payload = { 
            method: 'PUT', 
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carga)
        }
 
        fetch(url,payload)
        
        .then(response => response.json())
        
        .then(data => {

            if (data.mensaje) {alert(data.mensaje)}
            else {
                console.log(data);
                alert("Paciente modificado con éxito")
                location.reload();
            }
        
        })
        
        .catch(error => alert(error))

    })

    const botonCancelar = document.querySelector('#btn-cancelar');
    botonCancelar.addEventListener('click', function(event) {

        event.preventDefault();
        div_formulario.style.display = "none";
        
    })
})
 
function findBy(id) {

    let urlFind = '/pacientes/'+id;
    let payload = {
        method: 'GET'
    }

    fetch(urlFind,payload)
    
    .then(response => response.json())
    
    .then(data => {
        console.log(data);
        
            
            document.querySelector('#div_paciente_updating').style.display = "block";
            
            document.querySelector('#paciente-id').value = data.id;
            document.querySelector('#dni').value = data.dni;
            document.querySelector('#nombre-paciente').value = data.nombre;
            document.querySelector('#apellido-paciente').value = data.apellido;
            document.querySelector('#fecha-de-alta').value = data.fechaDeAlta;
            document.querySelector('#domicilio-id').value = data.domicilio.id;
            document.querySelector('#domicilio-calle').value = data.domicilio.calle;
            document.querySelector('#domicilio-numero').value = data.domicilio.altura;
            document.querySelector('#domicilio-localidad').value = data.domicilio.localidad;
            document.querySelector('#domicilio-provincia').value = data.domicilio.provincia;
        
    })
    .catch(error => alert(error))
}