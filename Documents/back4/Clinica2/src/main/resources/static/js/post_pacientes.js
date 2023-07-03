window.addEventListener('load', function() {

    let form = document.querySelector('#add_new_paciente');

    form.addEventListener('submit', function(e) {


        e.preventDefault();

        let carga = {
            dni: document.querySelector('#dni').value,
            nombre: document.querySelector('#nombre-paciente').value,
            apellido: document.querySelector('#apellido-paciente').value,
            domicilio: {
                calle: document.querySelector('#domicilio-calle').value,
                numero: document.querySelector('#domicilio-numero').value,
                localidad: document.querySelector('#domicilio-localidad').value,
                provincia: document.querySelector('#domicilio-provincia').value
            } 
        };


        let url = '/pacientes';
        let payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carga)
        }


        fetch(url, payload)

        .then(response => response.json())
        
        .then(data => {
            
            
            if (data.mensaje) {alert(data.mensaje)}
            else {
                alert("Paciente registrado con éxito");
                resetPacienteForm();
            }
            
        })
        
        .catch(error => { 
            
            alert(error);
        })

    })     

});


function resetPacienteForm(){
    document.querySelector('#dni').value = "";
    document.querySelector('#nombre-paciente').value = "";
    document.querySelector('#apellido-paciente').value = "";
    document.querySelector('#domicilio-calle').value = "";
    document.querySelector('#domicilio-numero').value = "";
    document.querySelector('#domicilio-localidad').value = "";
    document.querySelector('#domicilio-provincia').value = "";
}