window.addEventListener('load', function() {

    
    let form = document.querySelector('#add_new_turno');

    
    form.addEventListener('submit', function(event) {

        event.preventDefault();

        
        let url = '/Turnos'
        let carga = {
            fecha : fecha = document.querySelector('#fecha').value,
            hora: document.querySelector('#hora').value,
            idOdontologo : document.querySelector('#dropdown_odontologos').value,
            idPaciente : document.querySelector('#id_paciente').value
        }
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

            console.log(data)
            if(data.mensaje) {alert(data.mensaje)}
            else {
                alert('¡Turno agendado!')
                resetTurnoForm();
            }
        })
        
        .catch(error => {alert(error)})
        console.log(carga);
    })

})


function resetTurnoForm() {
    document.querySelector('#dropdown_odontologos').value = "";
    document.querySelector('#fecha').value = "";
}