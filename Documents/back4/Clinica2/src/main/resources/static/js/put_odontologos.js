window.addEventListener('load', function () {

    
    const form_update = document.querySelector('#update_odontologo_form');
    const div_formulario = this.document.querySelector('#div_odontologo_updating');
 
    form_update.addEventListener('submit', function (event) {

        event.preventDefault();

        let odontologoId = document.querySelector('#odontologo-id').value;

        
        const carga = {
            id: odontologoId,
            nombre: document.querySelector('#nombre-odontologo').value,
            apellido: document.querySelector('#apellido-odontologo').value,
            matricula: document.querySelector('#matricula').value,
        }
        
        
        const url = '/odontologos'; 
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
            console.log(data);            
            if (data.mensaje) {alert(data.mensaje)}
            else {
                alert("Odontólogo modificado con éxito")
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

    let urlFind = '/odontologos/'+id;
    let payload = {
        method: 'GET'
    }

    fetch(urlFind,payload)
    
    .then(response => response.json())
    
    .then(data => {
    
        document.querySelector('#div_odontologo_updating').style.display = "block";
        document.querySelector('#odontologo-id').value = data.id;
        document.querySelector('#nombre-odontologo').value = data.nombre;
        document.querySelector('#apellido-odontologo').value = data.apellido;
        document.querySelector('#matricula').value = data.matricula;
        console.log(data);        
    })

    .catch(error => alert(error))
}