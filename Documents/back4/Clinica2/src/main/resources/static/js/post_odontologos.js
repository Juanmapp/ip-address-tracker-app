window.addEventListener('load', function() {

    let form = document.querySelector('#add_new_odontologo');
    
    form.addEventListener('submit', function(e) {
        
        e.preventDefault();

        let carga = {
            nombre: document.querySelector('#nombre-odontologo').value,
            apellido: document.querySelector('#apellido-odontologo').value,
            matricula: document.querySelector('#matricula').value,
        }; 
        
        
        let url = '/odontologos';
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
                alert('Odontologo registrado con éxito');
                resetOdontologoForm();
            }
        })
        
        .catch(error => { 
            
            alert(error);
        })

    })     

});

function resetOdontologoForm(){
    document.querySelector('#nombre-odontologo').value = "";
    document.querySelector('#apellido-odontologo').value = "";
    document.querySelector('#matricula').value = "";
}