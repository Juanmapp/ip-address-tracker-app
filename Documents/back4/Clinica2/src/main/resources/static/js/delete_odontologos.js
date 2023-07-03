function deleteBy(id) {

    let url = "/odontologos/" + id;

    let payload = {
        method: "DELETE"
    }

    fetch(url, payload)
    
    .then(response => response.json())
    
    .then(data => {

        
            
            
            console.log("Odontologo eliminado: " + data)
            
            alert("Odontologo eliminado");
            
            let filaSeleccionada = document.querySelector("#tr_"+ id);
            filaSeleccionada.remove()
        
        
    })
    
    .catch(error => alert(error))

}