window.addEventListener('load', function() {

    let url = '/odontologos'
    let payload = {
        method: 'GET'
    }
    
    fetch(url, payload)

    .then(response => response.json())
    
    .then(data => {
        
       
        
            
            let dropdown = document.querySelector('#dropdown_odontologos');
            let dropdown2 = document.querySelector('#dropdown_odontologos2');
            
           
            data.forEach(odontologo => {
                let opcion = document.createElement('option');
                opcion.value = odontologo.id;
                opcion.text = `${odontologo.apellido}, ${odontologo.nombre}`;
                dropdown.appendChild(opcion);
            })
        

    })

    .catch(error => alert(error))

});