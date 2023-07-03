function deleteBy(id) {

    let url = "/pacientes/" + id;

    let payload = {
        method: "DELETE"
    }

    fetch(url, payload)
    
    .then(response => response.json())
    
    .then(data => {
            console.log("Paciente eliminado: " + data)
            alert("Paciente eliminado");
            let filaSeleccionada = document.querySelector("#tr_"+ id);
            filaSeleccionada.remove()

    })
    
    .catch(error => alert(error))

}