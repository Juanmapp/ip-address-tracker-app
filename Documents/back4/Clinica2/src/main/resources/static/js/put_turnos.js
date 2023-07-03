window.addEventListener('load', function () {

    
    const form_update = document.querySelector('#update_turno_form');
    const div_formulario = document.querySelector('#div_turno_updating');
 
    form_update.addEventListener('submit', function (event) {

        event.preventDefault();

        
        let carga = {
            id: document.querySelector('#turno_id').value,
            fecha: document.querySelector('#fecha_nueva').value,
            hora: document.querySelector('#hora_nueva').value,
            idOdontologo: document.querySelector('#dropdown_odontologos').value,
            idPaciente: document.querySelector('#id_paciente').value    
        }
        
        
        let url = '/Turnos'; 
        let payload = { 
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
                alert("Turno modificado con éxito")
                location.reload();
            }
            
        })
        
        .catch(error => alert(error))
        
    })

    let botonCancelar = document.querySelector('#btn_cancelar');
    botonCancelar.addEventListener('click', function(event) {
        
        event.preventDefault();
        div_formulario.style.display = "none";
        
    })
})




function findBy(id) {

    let url = '/Turnos/'+id;
    let payload = {
        method: 'GET'
    }

    fetch(url,payload)
    
    .then(response => response.json())
    
    .then(data => {
    
        if(data.mensaje) {alert(data.mensaje)}
        else {
            
            
            document.querySelector('#div_turno_updating').style.display = "block";
            document.querySelector('#turno_id').value = data.id;
            document.querySelector('#fecha_nueva').value = data.fecha;
            document.querySelector('#hora_nueva').value = data.hora;

        }
        
    })

    .catch(error => alert(error))
}