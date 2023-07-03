function deleteBy(id) {

    let url = "/Turnos/" + id;

    let payload = {
        method: "DELETE"
    }

    fetch(url, payload)
    
    .then(response => response.json())
    
    .then(data => {

        
            
            console.log("Turno eliminado: " + data)
            alert("Turno eliminado");
            let filaSeleccionada = document.querySelector("#row_"+ id);
            filaSeleccionada.remove()
        
    
    })
    
    .catch(error => alert(error))

}